const skillsGrid = document.getElementById("skillsGrid");
const btn = document.getElementById("toggleSkillsBtn");

let showAll = false;

const tools = [
  {
  name: "Arduino",
  icon: "img/logo/arduino.svg",
  description: "Microcontroller",
  level: 100,
},
{
  name: "Canva",
  icon: "img/logo/canva.svg",
  description: "Presentation Design",
  level: 90,
},
{
  name: "PHP",
  icon: "img/logo/php.jpeg",
  description: "Web Development",
  level: 80,
},
{
  name: "CSS",
  icon: "img/logo/css.png",
  description: "Styling",
  level: 80,
},
{
  name: "Bootstrap",
  icon: "img/logo/bootstrap.png",
  description: "UI Framework",
  level: 80,
},
{
  name: "Figma",
  icon: "img/logo/figma.png",
  description: "Design Tool",
  level: 75,
},
{
  name: "NodeJS",
  icon: "img/logo/nodejs.svg",
  description: "Backend Framework",
  level: 70,
},
{
  name: "Python",
  icon: "img/logo/python.png",
  description: "Programming Language",
  level: 70,
},
{
  name: "TailwindCSS",
  icon: "img/logo/tailwind.png",
  description: "UI Framework",
  level: 70,
},
{
  name: "MicrosoftSQL",
  icon: "img/logo/microsoftsql.png",
  description: "Database",
  level: 60,
},
{
  name: "Raspberry Pi",
  icon: "img/logo/Raspberry_Pi-Logo.wine.png",
  description: "Single Board Computer",
  level: 60,
},
{
  name: "EasyEDA",
  icon: "img/logo/easyeda.png",
  description: "PCB Design",
  level: 40,
},
{
  name: "STM",
  icon: "img/logo/STMicroelectronics.png",
  description: "Microcontroller",
  level: 40,
},
{
  name: "Cisco",
  icon: "img/logo/cisco.png",
  description: "Networking",
  level: 40,
},
{
  name: "Jquery",
  icon: "img/logo/jquery.svg",
  description: "JavaScript Library",
  level: 40,
},
{
  name: "JavaScript",
  icon: "img/logo/javascript.png",
  description: "Programming Language",
  level: 30,
},
{
  name: "NextJS",
  icon: "img/logo/nextjs.png",
  description: "Full Stack Framework",
  level: 10,
}
];

function createToolCard(tool) {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-2xl shadow p-6 hover:shadow-lg transition-all";

  card.innerHTML = `
    <div class="flex items-center mb-4">
      <img src="${tool.icon}" alt="${tool.name}" class="w-10 h-10 object-contain mr-4" />
      <div>
        <h3 class="text-lg font-semibold text-neutral-800">${tool.name}</h3>
        <p class="text-sm text-neutral-500">${tool.description}</p>
      </div>
    </div>
    <div class="w-full bg-neutral-200 rounded-full h-2">
      <div class="bg-red-900 h-2 rounded-full" style="width: ${tool.level}%;"></div>
    </div>
    <p class="text-xs text-neutral-500 mt-1">Skill Level: ${tool.level}%</p>
  `;
  return card;
}

function renderTools() {
  skillsGrid.innerHTML = "";
  const displayed = showAll ? tools : tools.slice(0, 6);
  displayed.forEach((tool) => skillsGrid.appendChild(createToolCard(tool)));

  btn.textContent = showAll ? "Show Less ▲" : "Show More ▼";
}

btn.addEventListener("click", () => {
  showAll = !showAll;
  renderTools();
});

renderTools();
