// import {
//   AiFillLinkedin,
//   AiFillTwitterCircle,
//   AiFillGithub,
//   AiFillMail,
// } from "react-icons/ai";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function MyLinks() {
//   const links = [
//     { href: "https://github.com/tbrown034", icon: AiFillGithub, label: "GitHub" },
//     { href: "https://www.linkedin.com/in/trevorabrown/", icon: AiFillLinkedin, label: "LinkedIn" },
//     { href: "https://twitter.com/tbrownOKC", icon: AiFillTwitterCircle, label: "Twitter" },
//     { href: "mailto:trevorbrown.web@gmail.com", icon: AiFillMail, label: "Email", isEmail: true }
//   ];

//   return (
//     <section className="mt-8">
//       <div className="flex justify-center gap-4">
//         {links.map((link, index) => {
//           const IconComponent = link.icon;
//           const Component = link.isEmail ? 'a' : Link;

//           return (
//             <Component
//               key={index}
//               className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//               href={link.href}
//               {...(!link.isEmail && { target: "_blank" })}
//               title={link.label}
//             >
//               <IconComponent className="w-6 h-6" />
//             </Component>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
