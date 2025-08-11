// import { CodeBracketIcon, NewspaperIcon, ChartBarIcon, UserIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";

// export default function BottomNav() {
//   const navItems = [
//     { href: "#coding", icon: CodeBracketIcon, label: "Coding" },
//     { href: "#journalism", icon: NewspaperIcon, label: "Journalism" },
//     { href: "#dataviz", icon: ChartBarIcon, label: "Data Viz" },
//     { href: "#about", icon: UserIcon, label: "About" }
//   ];

//   return (
//     <nav className="mt-6">
//       <div className="flex justify-center gap-6 sm:gap-8">
//         {navItems.map((item, index) => {
//           const IconComponent = item.icon;
//           return (
//             <Link
//               key={index}
//               href={item.href}
//               className="flex flex-col items-center gap-1 p-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
//             >
//               <IconComponent className="w-5 h-5" />
//               <span className="text-xs font-medium">{item.label}</span>
//             </Link>
//           );
//         })}
//       </div>
//     </nav>
//   );
// }
