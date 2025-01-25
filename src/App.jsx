import AuthController from "./Router/AuthController";
// import { useEffect } from "react";
// import { nanoid } from "nanoid";

const App = () => {
      // useEffect(() => {
      //       const employees = [
      //             {
      //                   id: nanoid(),
      //                   username: "Ali Khan",
      //                   email: "alikhan@employee.com",
      //                   password: "Ali!Khan123",
      //                   tasks: [
      //                         {
      //                               title: "Develop Login Feature",
      //                               description: "Implement login functionality with validation and error handling.",
      //                               category: "Development",
      //                               active: true,
      //                               completed: false,
      //                               failed: false,
      //                               newTask: true,
      //                               deadline: "2025-01-30",
      //                         },
      //                         {
      //                               title: "Fix API Bugs",
      //                               description: "Resolve API response inconsistencies and improve performance.",
      //                               category: "QA",
      //                               active: false,
      //                               completed: true,
      //                               failed: false,
      //                               newTask: false,
      //                               deadline: "2025-02-05",
      //                         },
      //                         {
      //                               title: "Optimize Backend",
      //                               description: "Refactor the server code to reduce response time by 20%.",
      //                               category: "Development",
      //                               active: true,
      //                               completed: false,
      //                               failed: false,
      //                               newTask: true,
      //                               deadline: "2025-02-10",
      //                         },
      //                   ],
      //             },
      //             {
      //                   id: nanoid(),
      //                   username: "Aisha Ahmed",
      //                   email: "aishaahmed@employee.com",
      //                   password: "Aisha#Ahmed321",
      //                   tasks: [
      //                         {
      //                               title: "Design Database Schema",
      //                               description: "Create an efficient schema for user and transaction data.",
      //                               category: "Design",
      //                               active: true,
      //                               completed: false,
      //                               failed: false,
      //                               newTask: true,
      //                               deadline: "2025-01-25",
      //                         },
      //                         {
      //                               title: "Write Unit Tests",
      //                               description: "Ensure code reliability by writing comprehensive tests.",
      //                               category: "QA",
      //                               active: false,
      //                               completed: false,
      //                               failed: true,
      //                               newTask: false,
      //                               deadline: "2025-02-01",
      //                         },
      //                   ],
      //             },
      //             {
      //                   id: nanoid(),
      //                   username: "Omar Sheikh",
      //                   email: "omarsheikh@employee.com",
      //                   password: "Omar@Sheikh654",
      //                   tasks: [
      //                         {
      //                               title: "Integrate Payment Gateway",
      //                               description: "Add support for secure payments using Stripe API.",
      //                               category: "Development",
      //                               active: false,
      //                               completed: true,
      //                               failed: false,
      //                               newTask: false,
      //                               deadline: "2025-01-29",
      //                         },
      //                         {
      //                               title: "Conduct Security Audit",
      //                               description: "Identify vulnerabilities in the authentication system.",
      //                               category: "QA",
      //                               active: true,
      //                               completed: false,
      //                               failed: false,
      //                               newTask: true,
      //                               deadline: "2025-02-12",
      //                         },
      //                         {
      //                               title: "Document API Endpoints",
      //                               description: "Create detailed API documentation for the dev team.",
      //                               category: "Documentation",
      //                               active: true,
      //                               completed: false,
      //                               failed: false,
      //                               newTask: true,
      //                               deadline: "2025-02-15",
      //                         },
      //                         {
      //                               title: "Refactor Middleware Code",
      //                               description: "Improve middleware readability and reduce code duplication.",
      //                               category: "Development",
      //                               active: false,
      //                               completed: true,
      //                               failed: false,
      //                               newTask: false,
      //                               deadline: "2025-02-18",
      //                         },
      //                   ],
      //             },
      //             {
      //                   id: nanoid(),
      //                   username: "Maryam Iqbal",
      //                   email: "maryamiqbal@employee.com",
      //                   password: "Maryam!Iqbal789",
      //                   tasks: [
      //                         {
      //                               title: "Create UI Mockups",
      //                               description: "Design user interface mockups for the dashboard.",
      //                               category: "Design",
      //                               active: true,
      //                               completed: false,
      //                               failed: false,
      //                               newTask: true,
      //                               deadline: "2025-01-28",
      //                         },
      //                         {
      //                               title: "Improve Accessibility",
      //                               description: "Enhance web app accessibility for users with disabilities.",
      //                               category: "Design",
      //                               active: true,
      //                               completed: false,
      //                               failed: false,
      //                               newTask: true,
      //                               deadline: "2025-02-01",
      //                         },
      //                         {
      //                               title: "Fix CSS Issues",
      //                               description: "Resolve style conflicts and align elements properly.",
      //                               category: "Development",
      //                               active: false,
      //                               completed: true,
      //                               failed: false,
      //                               newTask: false,
      //                               deadline: "2025-02-05",
      //                         },
      //                   ],
      //             },
      //             {
      //                   id: nanoid(),
      //                   username: "Hamza Tariq",
      //                   email: "hamzatariq@employee.com",
      //                   password: "Hamza#Tariq456",
      //                   tasks: [
      //                         {
      //                               title: "Deploy to Production",
      //                               description: "Prepare and deploy the application to the production server.",
      //                               category: "DevOps",
      //                               active: true,
      //                               completed: false,
      //                               failed: false,
      //                               newTask: true,
      //                               deadline: "2025-01-29",
      //                         },
      //                         {
      //                               title: "Write Deployment Scripts",
      //                               description: "Automate deployment steps with custom scripts.",
      //                               category: "DevOps",
      //                               active: false,
      //                               completed: true,
      //                               failed: false,
      //                               newTask: false,
      //                               deadline: "2025-02-03",
      //                         },
      //                         {
      //                               title: "Set Up Monitoring Tools",
      //                               description: "Configure monitoring for app performance and errors.",
      //                               category: "DevOps",
      //                               active: false,
      //                               completed: true,
      //                               failed: false,
      //                               newTask: false,
      //                               deadline: "2025-02-06",
      //                         },
      //                         {
      //                               title: "Optimize Frontend Performance",
      //                               description: "Improve page load times by optimizing assets and scripts.",
      //                               category: "Development",
      //                               active: true,
      //                               completed: false,
      //                               failed: false,
      //                               newTask: true,
      //                               deadline: "2025-02-15",
      //                         },
      //                   ],
      //             },
      //       ];
      //       const admin = {
      //             id: nanoid(),
      //             username: "Admin",
      //             email: "admin@admin.com",
      //             password: "Admin!Secure2025",
      //       };

      //       localStorage.setItem("employee", JSON.stringify(employees));
      // localStorage.setItem("admin", JSON.stringify(admin));
      // }, []);
      return <AuthController />;
};

export default App;
