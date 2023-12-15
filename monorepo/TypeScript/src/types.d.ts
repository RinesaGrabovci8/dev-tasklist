interface Intern {
    name: string;
    age: number;
    skills: string[];
}

enum Domain {
    Web = "Web",
    Connect = "Connect",
    Backend = "Backend",
}
  
interface Junior {
    name: string;
    age: number;
    skills: string[];
    dateofpromotion: string; 
    domain: Domain;
}

interface Company {
    Interns: Intern[];
    Juniors: Junior[];
    Country: string;
}
  
export default Company;
