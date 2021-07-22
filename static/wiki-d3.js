var pubs =
{
  "name": "Wikipedia",
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
]}
;


.attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end" })
.attr("x", function(d) { return d.x < 180 ? 10 : 0 })