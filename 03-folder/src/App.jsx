import Card from "./components/Card";

const App = () => {
  const User = [
    {
      id: 1,
      name: "Wade Wilson",
      profession: "UI/UX Designer",
      company: "Epic Coders",
      price: "$55/hr",
      status: "Available",
      image:
        "https://imgs.search.brave.com/4ckmdJ0JCO0huUQNb4UHNBqQ-DZ-zbUudqUXWiqWAcw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hdmF0/YXJzLnBmcHRvd24u/Y29tLzEwNC9kZWFk/cG9vbC1wZnAtMzg0/OS5wbmc",
      skills: ["UI", "UX", "Photoshop", "Figma", "Wireframing", "Branding"],
      about:
        "Wade is a 32 year old UI/UX designer with an impressive portfolio behind him.",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      profession: "Frontend Developer",
      company: "NextGen Labs",
      price: "$48/hr",
      status: "Available",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      skills: ["React", "JavaScript", "CSS", "Tailwind", "Redux"],
      about:
        "Sarah specializes in building interactive user interfaces using React and modern JS frameworks.",
    },
    {
      id: 3,
      name: "Michael Carter",
      profession: "Backend Engineer",
      company: "CodeWorks",
      price: "$60/hr",
      status: "Busy",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      skills: ["Node.js", "Express", "MongoDB", "API Design"],
      about:
        "Michael is a backend developer with expertise in scalable server architectures.",
    },
    {
      id: 4,
      name: "Emma Davis",
      profession: "Product Designer",
      company: "Designify",
      price: "$52/hr",
      status: "Available",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      skills: ["UI", "UX", "Prototyping", "Illustrator", "Figma"],
      about:
        "Emma creates intuitive user experiences and focuses on design systems and accessibility.",
    },
    {
      id: 5,
      name: "James Anderson",
      profession: "Full Stack Developer",
      company: "Stackify",
      price: "$65/hr",
      status: "Available",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
      skills: ["React", "Node.js", "GraphQL", "Docker", "AWS"],
      about:
        "James builds complete web applications and deploys them using modern DevOps practices.",
    },
    {
      id: 6,
      name: "Olivia Brown",
      profession: "Data Analyst",
      company: "DataSense",
      price: "$45/hr",
      status: "Available",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      skills: ["Python", "Excel", "PowerBI", "SQL"],
      about:
        "Olivia turns complex datasets into meaningful insights for business decisions.",
    },
    {
      id: 7,
      name: "Liam Johnson",
      profession: "DevOps Engineer",
      company: "CloudNova",
      price: "$70/hr",
      status: "Busy",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
      skills: ["AWS", "Kubernetes", "CI/CD", "Linux"],
      about:
        "Liam ensures software delivery pipelines run smoothly with cloud and automation tools.",
    },
    {
      id: 8,
      name: "Sophia Martinez",
      profession: "Mobile App Developer",
      company: "Appify",
      price: "$58/hr",
      status: "Available",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      skills: ["Flutter", "React Native", "Dart", "Firebase"],
      about:
        "Sophia develops smooth, cross-platform mobile applications for iOS and Android.",
    },
    {
      id: 9,
      name: "Ethan Scott",
      profession: "Cybersecurity Expert",
      company: "SecureNet",
      price: "$80/hr",
      status: "Available",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      skills: ["Ethical Hacking", "Network Security", "Linux", "PenTesting"],
      about:
        "Ethan secures systems and networks from vulnerabilities and potential threats.",
    },
    {
      id: 10,
      name: "Ava Thompson",
      profession: "AI Researcher",
      company: "NeuroLabs",
      price: "$90/hr",
      status: "Busy",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      skills: ["Machine Learning", "Python", "TensorFlow", "Data Science"],
      about:
        "Ava works on innovative AI models for real-world applications in automation and NLP.",
    },
  ];

  console.log(User);
  return (
    <div className="parent">
     {User.map((elem) => (
  <Card key={elem.id} {...elem} />
))}

    </div>
  );
};

export default App;
