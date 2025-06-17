import {
  BookOpen,
  FlaskConical,
  Calculator,
  Globe,
  Code2,
  Paintbrush,
  Users2,
  BarChart2,
  Music2,
  Languages,
  BrainCircuit,
  Atom,
  Hammer,
  Landmark,
  Compass,
  GraduationCap,
  Terminal,
  Braces,
  Settings2,
  Workflow,
} from "lucide-react";

export const SPECIALTIES = [
  // Academic Subjects
  {
    name: "Mathematics",
    icon: <Calculator className="h-5 w-5" />,
  },
  {
    name: "Physics",
    icon: <Atom className="h-5 w-5" />,
  },
  {
    name: "Chemistry",
    icon: <FlaskConical className="h-5 w-5" />,
  },
  {
    name: "Biology",
    icon: <BrainCircuit className="h-5 w-5" />,
  },
  {
    name: "English",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    name: "History",
    icon: <Compass className="h-5 w-5" />,
  },
  {
    name: "Geography",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    name: "Political Science",
    icon: <Landmark className="h-5 w-5" />,
  },
  {
    name: "Social Studies",
    icon: <Users2 className="h-5 w-5" />,
  },
  {
    name: "Economics",
    icon: <BarChart2 className="h-5 w-5" />,
  },
  {
    name: "Art & Design",
    icon: <Paintbrush className="h-5 w-5" />,
  },
  {
    name: "Music",
    icon: <Music2 className="h-5 w-5" />,
  },
  {
    name: "Languages",
    icon: <Languages className="h-5 w-5" />,
  },
  {
    name: "Law",
    icon: <Hammer className="h-5 w-5" />,
  },

  // Programming Languages
  {
    name: "C Programming",
    icon: <Terminal className="h-5 w-5" />,
  },
  {
    name: "C++ Programming",
    icon: <Terminal className="h-5 w-5" />,
  },
  {
    name: "Java",
    icon: <Braces className="h-5 w-5" />,
  },
  {
    name: "Python",
    icon: <Settings2 className="h-5 w-5" />,
  },
  {
    name: "JavaScript",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    name: "TypeScript",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    name: "HTML & CSS",
    icon: <Braces className="h-5 w-5" />,
  },
  {
    name: "React",
    icon: <Workflow className="h-5 w-5" />,
  },
  {
    name: "Node.js",
    icon: <Workflow className="h-5 w-5" />,
  },

  // CS Core
  {
    name: "Data Structures and Algorithms (DSA)",
    icon: <Workflow className="h-5 w-5" />,
  },
  {
    name: "Operating Systems",
    icon: <Settings2 className="h-5 w-5" />,
  },
  {
    name: "Database Management",
    icon: <BarChart2 className="h-5 w-5" />,
  },
  {
    name: "Computer Networks",
    icon: <Globe className="h-5 w-5" />,
  },

  // Misc
  {
    name: "Other",
    icon: <GraduationCap className="h-5 w-5" />,
  },
];
