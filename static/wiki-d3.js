var pubs =

{
  "name": "",
  "children": [
    {"name": "People", "children": [
      {"name": "Politicians and leaders"},
      {"name": "Religious figures"},
      {"name": "Explorers"},
      {"name": "Philosophers and social scientists"},
      {"name": "Writers"},
      {"name": "Composers and musicians"},
      {"name": "Inventors and scientists"},
      {"name": "Mathematicians"},
      {"name": "Artists"},
      {"name": "Filmmakers"},
      {"name": "Businesspeople"}
    ]},
  {"name": "History", "children": [
    {"name": "General"},
    {"name": "History by region"},
    {"name": "History by subject"},
    {"name": "Prehistory"},
    {"name": "Ancient history"},
    {"name": "Post-classical history"},
    {"name": "Modern history"}
  ]},
  {"name": "Geography", "children": [
    {"name": "General"},
    {"name": "Continents and regions"},
    {"name": "Cities"},
    {"name": "Countries"},
    {"name": "Hydrological features"},
    {"name": "Terrestrial features"}
  ]},
  {"name": "Arts", "children": [
    {"name": "General"},
    {"name": "Artistic movements"},
    {"name": "Architecture"},
    {"name": "Literature"},
    {"name": "Music"},
    {"name": "Performing arts"},
    {"name": "Visual arts"},
    {"name": "Philosophy and religion"},
    {"name": "Philosophy"},
    {"name": "Religion"},
    {"name": "Specific religions"}
]},
  {"name": "Everyday life", "children": [
    {"name": "General"},
    {"name": "Family and kinship"},
    {"name": "Sexuality and gender"},
    {"name": "Food and drink"},
    {"name": "Recreation and entertainment"}
  ]},
  {"name": "Society and social sciences", "children": [
    {"name": "General"},
    {"name": "Politics and government"},
    {"name": "Conflict"},
    {"name": "Education"},
    {"name": "Business and economics"},
    {"name": "Social issues"},
    {"name": "Law"},
    {"name": "Psychology"},
    {"name": "Language"},
    {"name": "Media"}
  ]},
    {"name": "Health, medicine and disease", "children": [
    {"name": "Illness and injury"},
    {"name": "Health, fitness, and medicine"},
    {"name": "Drugs and medication"}
    ]},
    {"name": "Science", "children": [
    {"name": "General"},
    {"name": "Astronomy"},
    {"name": "Physics"},
    {"name": "Biology"},
    {"name": "Chemistry"},
    {"name": "Earth science"}
  ]},
{ "name": "Technology", "children":[
  {"name": "General"},
  {"name": "Energy"},
  {"name": "Food and health"},
  {"name": "Weapons"},
  {"name": "Tools and machinery"},
  {"name": "Media and communication"},
  {"name": "Computing and information technology"},
  {"name": "Electronics"},
  {"name": "Space"},
  {"name": "Transportation"},
  {"name": "Navigation and timekeeping"},
  {"name": "Structures"},
  {"name": "Materials"},
  {"name": "Optical"}
  ]},
  {"name": "Mathematics", "children": [
    {"name": "General"},
    {"name": "Counting and number"},
    {"name": "Algebra"},
    {"name": "Analysis"},
    {"name": "Arithmetic"},
    {"name": "Geometry and topology"},
    {"name": "Probability and statistics"}
  ]}
]};

var diameter = 1800;

var margin = {top: 20, right: 120, bottom: 20, left: 120},
    width = diameter,
    height = diameter;
    
var i = 0,
    duration = 350,
    root;

var tree = d3.layout.tree()
    .size([360, diameter / 2 - 80])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 10) / a.depth; });

var diagonal = d3.svg.diagonal.radial()
    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

var svg = d3.select("body").append("svg")
    .attr("width", width )
    .attr("height", height )
    .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

root = pubs;
root.x0 = height / 2;
root.y0 = 0;

//root.children.forEach(collapse); // start with all children collapsed
update(root);

d3.select(self.frameElement).style("height", "1800px");

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root),
      links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 180; });

  // Update the nodes…
  var node = svg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      //.attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
      .on("click", click);

  nodeEnter.append("circle")
      .attr("r", 1e-6)
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeEnter.append("text")
      .attr("x", 10)
      .attr("dy", ".35em")
      .attr("text-anchor", "start")
      //.attr("transform", function(d) { return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + (d.name.length * 8.5)  + ")"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

  nodeUpdate.select("circle")
      .attr("r", 5.5)
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeUpdate.select("text")
      .style("fill-opacity", 1)
      .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end" })
      .attr("x", function(d) { return d.x < 180 ? 10 : 0 })
      .attr("transform", function(d) { return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + 10 + ")"; });

  // TODO: appropriate transform
  var nodeExit = node.exit().transition()
      .duration(duration)
      //.attr("transform", function(d) { return "diagonal(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      });

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  
  update(d);
}

// Collapse nodes
function collapse(d) {
  if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;c
    }
}