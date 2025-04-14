// import React, { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   Sparkles,
//   Mail,
//   Phone,
//   MapPin,
//   Send,
//   Search,
//   Lightbulb,
//   Settings,
//   Check,
//   Code,
//   Zap,
//   Shield,
//   BarChart,
// } from "lucide-react";

// const LandingPage = () => {
//   const [scrollY, setScrollY] = useState(0);

//   // Handle scroll for parallax effects
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="font-sans text-black w-full overflow-hidden">
//       <Hero scrollY={scrollY} />
//       <WhatWeOffer />
//       <HowItWorks />
//       <ContactUs />
//     </div>
//   );
// };

// // Hero Section
// const Hero = ({ scrollY }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);

//     // Add mouse parallax effect
//     const handleMouseMove = (e) => {
//       const heroElement = document.getElementById("hero-container");
//       if (heroElement) {
//         const moveX = (window.innerWidth / 2 - e.clientX) / 50;
//         const moveY = (window.innerHeight / 2 - e.clientY) / 50;

//         const decorElements = heroElement.querySelectorAll(".decor-element");
//         decorElements.forEach((el, i) => {
//           const speed = 1 + i * 0.2;
//           el.style.transform = `translate(${moveX * speed}px, ${
//             moveY * speed
//           }px)`;
//         });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div
//       id="hero-container"
//       className="bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950 text-white min-h-screen flex items-center relative overflow-hidden"
//       style={{
//         backgroundPosition: `center ${scrollY * 0.5}px`,
//       }}
//     >
//       {/* Animated background elements */}
//       <div
//         className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal-400/10 blur-3xl animate-pulse decor-element"
//         style={{ animationDuration: "15s" }}
//       ></div>
//       <div
//         className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-fuchsia-500/10 blur-3xl animate-pulse decor-element"
//         style={{ animationDuration: "20s", animationDelay: "1s" }}
//       ></div>
//       <div
//         className="absolute top-2/3 left-1/2 w-48 h-48 rounded-full bg-sky-400/10 blur-3xl animate-pulse decor-element"
//         style={{ animationDuration: "18s", animationDelay: "2s" }}
//       ></div>

//       {/* Grid overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

//       {/* Main content */}
//       <div className="container mx-auto px-6 py-16 z-10">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Left text content */}
//           <div className="lg:w-1/2 mb-10 lg:mb-0">
//             <div
//               className={`mb-4 flex items-center transition-all duration-1000 transform ${
//                 isVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-10"
//               }`}
//             >
//               <span className="bg-gradient-to-r from-teal-400/20 to-fuchsia-500/20 text-teal-300 text-sm font-medium py-1 px-3 rounded-full border border-teal-400/20 backdrop-blur-sm">
//                 Next Generation Design
//               </span>
//             </div>
//             <h1
//               className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 delay-300 transform ${
//                 isVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-10"
//               }`}
//             >
//               <span className="text-white">Dream.</span>{" "}
//               <span className="bg-gradient-to-r from-teal-400 to-cyan-300 text-transparent bg-clip-text">
//                 Design.
//               </span>{" "}
//               <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 text-transparent bg-clip-text">
//                 Deliver.
//               </span>
//             </h1>
//             <p
//               className={`text-gray-300 text-lg mb-8 max-w-lg transition-all duration-1000 delay-500 transform ${
//                 isVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-10"
//               }`}
//             >
//               Elevate your digital presence with our bold, immersive approach.
//               We create experiences that captivate and convert, blending
//               cutting-edge aesthetics with powerful functionality.
//             </p>
//             <div
//               className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 transform ${
//                 isVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-10"
//               }`}
//             >
//               <button className="relative overflow-hidden bg-gradient-to-r from-teal-400 to-fuchsia-500 hover:from-teal-500 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center group">
//                 <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-400/0 via-white/30 to-teal-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
//                 <span className="relative flex items-center">
//                   Get Started
//                   <ArrowRight
//                     size={18}
//                     className="ml-2 group-hover:translate-x-1 transition-transform"
//                   />
//                 </span>
//               </button>
//               <button className="relative overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center group">
//                 <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-400/0 via-white/10 to-teal-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
//                 <span className="relative flex items-center">
//                   <Sparkles size={18} className="mr-2 text-teal-400" />
//                   Explore Features
//                 </span>
//               </button>
//             </div>
//           </div>

//           {/* Right visual content */}
//           <div
//             className={`lg:w-1/2 transition-all duration-1000 delay-700 transform ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 translate-x-10"
//             }`}
//           >
//             <div className="relative group">
//               {/* Decorative elements */}
//               <div
//                 className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-teal-400 opacity-60 animate-pulse decor-element"
//                 style={{ animationDuration: "4s" }}
//               ></div>
//               <div
//                 className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-fuchsia-400 opacity-60 animate-pulse decor-element"
//                 style={{ animationDuration: "4s", animationDelay: "1s" }}
//               ></div>

//               {/* Main content frame */}
//               <div className="bg-gradient-to-br from-gray-900 to-indigo-950 p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl shadow-indigo-500/10 transition-transform duration-700 hover:scale-[1.02] hover:shadow-teal-500/20">
//                 <div className="bg-white/5 rounded-xl overflow-hidden p-1">
//                   <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 h-72 relative overflow-hidden">
//                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>

//                     <div className="flex justify-between mb-4 relative z-10">
//                       <div className="flex space-x-2">
//                         <div
//                           className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"
//                           style={{ animationDuration: "2s" }}
//                         ></div>
//                         <div
//                           className="w-3 h-3 bg-fuchsia-400 rounded-full animate-pulse"
//                           style={{
//                             animationDuration: "2s",
//                             animationDelay: "0.3s",
//                           }}
//                         ></div>
//                         <div
//                           className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"
//                           style={{
//                             animationDuration: "2s",
//                             animationDelay: "0.6s",
//                           }}
//                         ></div>
//                       </div>
//                       <div className="text-white/50 text-sm">
//                         Design Preview
//                       </div>
//                     </div>

//                     {/* Content preview */}
//                     <div className="mt-6 flex flex-col gap-3 relative z-10">
//                       <div className="h-3 bg-gradient-to-r from-white/10 to-white/5 rounded-full w-full"></div>
//                       <div className="h-3 bg-gradient-to-r from-white/10 to-white/5 rounded-full w-5/6"></div>
//                       <div className="h-3 bg-gradient-to-r from-white/10 to-white/5 rounded-full w-4/6"></div>
//                       <div className="mt-4 flex gap-3">
//                         <div className="h-16 w-16 bg-teal-400/10 rounded-lg border border-teal-400/30 transition-all duration-300 hover:bg-teal-400/20"></div>
//                         <div className="h-16 w-16 bg-fuchsia-400/10 rounded-lg border border-fuchsia-400/30 transition-all duration-300 hover:bg-fuchsia-400/20"></div>
//                         <div className="h-16 w-16 bg-cyan-400/10 rounded-lg border border-cyan-400/30 transition-all duration-300 hover:bg-cyan-400/20"></div>
//                       </div>
//                       <div className="mt-4 h-24 bg-gradient-to-r from-teal-400/10 via-purple-400/10 to-cyan-400/10 rounded-lg border border-white/10"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
//         <span className="text-white/60 text-sm mb-2">Scroll Down</span>
//         <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//           <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-bounce"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // What We Offer Section
// const WhatWeOffer = () => {
//   const [activeCardIndex, setActiveCardIndex] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById("services");
//       if (section) {
//         const rect = section.getBoundingClientRect();
//         const isInView =
//           rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
//         setIsVisible(isInView);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Check on initial render

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const services = [
//     {
//       icon: <Code size={28} className="text-white" />,
//       bgColor: "bg-gradient-to-br from-teal-400 to-cyan-500",
//       title: "Web Development",
//       description:
//         "Custom websites that are responsive, fast, and optimized for user experience.",
//     },
//     {
//       icon: <BarChart size={28} className="text-white" />,
//       bgColor: "bg-gradient-to-br from-fuchsia-400 to-purple-500",
//       title: "Data Analytics",
//       description:
//         "Transform your data into actionable insights with our advanced analytics solutions.",
//     },
//     {
//       icon: <Zap size={28} className="text-white" />,
//       bgColor: "bg-gradient-to-br from-amber-400 to-orange-500",
//       title: "Performance Optimization",
//       description:
//         "Improve speed and efficiency of your existing digital products.",
//     },
//     {
//       icon: <Shield size={28} className="text-white" />,
//       bgColor: "bg-gradient-to-br from-indigo-400 to-blue-500",
//       title: "Security Solutions",
//       description:
//         "Protect your digital assets with our comprehensive security implementations.",
//     },
//   ];

//   return (
//     <div className="bg-white py-20 relative" id="services">
//       {/* Background elements */}
//       <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-950 to-transparent opacity-10"></div>
//       <div className="absolute -top-10 right-10 w-32 h-32 bg-teal-100 rounded-full opacity-30 blur-xl"></div>
//       <div className="absolute bottom-10 left-10 w-40 h-40 bg-fuchsia-100 rounded-full opacity-30 blur-xl"></div>

//       <div className="container mx-auto px-6">
//         <div
//           className={`text-center mb-16 transition-all duration-1000 transform ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <span className="text-sm font-medium bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text py-1 px-3 rounded-full bg-gray-100">
//             Our Services
//           </span>
//           <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-indigo-800 to-gray-800 text-transparent bg-clip-text mt-3 mb-3">
//             What We Offer
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-indigo-500 mx-auto mb-6 rounded-full"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             We provide comprehensive solutions tailored to your specific needs.
//             Discover how we can help your business grow.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`bg-white rounded-xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all transform duration-500 ${
//                 isVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-10"
//               }`}
//               style={{
//                 transitionDelay: `${index * 200}ms`,
//                 transform:
//                   activeCardIndex === index ? "scale(1.05)" : "scale(1)",
//               }}
//               onMouseEnter={() => setActiveCardIndex(index)}
//               onMouseLeave={() => setActiveCardIndex(null)}
//             >
//               <div
//                 className={`rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 ${service.bgColor} transition-transform transform group-hover:scale-110 duration-500 shadow-lg`}
//               >
//                 {service.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // How It Works Section
// const HowItWorks = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeStepIndex, setActiveStepIndex] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById("process");
//       if (section) {
//         const rect = section.getBoundingClientRect();
//         const isInView =
//           rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
//         setIsVisible(isInView);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Check on initial render

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const steps = [
//     {
//       icon: <Search size={28} className="text-white" />,
//       title: "Discover",
//       description:
//         "Tell us about your goals and requirements so we can understand your needs perfectly.",
//       color: "bg-teal-400",
//       gradient: "from-teal-400 to-cyan-500",
//     },
//     {
//       icon: <Lightbulb size={28} className="text-white" />,
//       title: "Plan",
//       description:
//         "Our experts will create a customized strategy tailored to your specific situation.",
//       color: "bg-fuchsia-400",
//       gradient: "from-fuchsia-400 to-purple-500",
//     },
//     {
//       icon: <Settings size={28} className="text-white" />,
//       title: "Implement",
//       description:
//         "Our team works diligently to implement the solution with minimal disruption.",
//       color: "bg-amber-400",
//       gradient: "from-amber-400 to-orange-500",
//     },
//     {
//       icon: <Check size={28} className="text-white" />,
//       title: "Succeed",
//       description:
//         "Enjoy the results as your business grows and thrives with our continued support.",
//       color: "bg-indigo-400",
//       gradient: "from-indigo-400 to-blue-500",
//     },
//   ];

//   return (
//     <div className="bg-gray-950 py-20 relative" id="process">
//       {/* Background elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//         <div
//           className="absolute top-40 right-10 w-32 h-32 bg-teal-400 rounded-full opacity-10 blur-3xl animate-pulse"
//           style={{ animationDuration: "10s" }}
//         ></div>
//         <div
//           className="absolute bottom-40 left-10 w-32 h-32 bg-fuchsia-400 rounded-full opacity-10 blur-3xl animate-pulse"
//           style={{ animationDuration: "15s", animationDelay: "2s" }}
//         ></div>

//         {/* Grid overlay */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div
//           className={`text-center mb-16 transition-all duration-1000 transform ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <span className="text-sm font-medium text-teal-300 bg-teal-900/30 py-1 px-3 rounded-full">
//             Our Process
//           </span>
//           <h2 className="text-4xl font-bold text-white mt-3 mb-3">
//             How It Works
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-fuchsia-400 mx-auto mb-6 rounded-full"></div>
//           <p className="text-gray-300 max-w-2xl mx-auto">
//             A simple, proven process that delivers exceptional results every
//             time.
//           </p>
//         </div>

//         {/* Vertical Timeline */}
//         <div className="max-w-4xl mx-auto relative">
//           {/* Main vertical line */}
//           <div className="absolute left-24 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-purple-400 to-blue-400 z-0 rounded-full"></div>

//           <div className="space-y-16">
//             {steps.map((step, index) => (
//               <div
//                 key={index}
//                 className={`flex transition-all duration-1000 transform ${
//                   isVisible
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-10"
//                 }`}
//                 style={{ transitionDelay: `${index * 200}ms` }}
//                 onMouseEnter={() => setActiveStepIndex(index)}
//                 onMouseLeave={() => setActiveStepIndex(null)}
//               >
//                 {/* Timeline node with number */}
//                 <div className="w-48 flex justify-center relative">
//                   <div
//                     className={`bg-gray-950 border-2 border-${step.color.replace(
//                       "bg-",
//                       ""
//                     )} rounded-full w-12 h-12 flex items-center justify-center z-10 absolute left-24 transform -translate-x-1/2 transition-all duration-300 ${
//                       activeStepIndex === index ? "scale-110" : ""
//                     }`}
//                   >
//                     <span className="text-white font-bold text-lg">
//                       {index + 1}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content side */}
//                 <div className="flex-1 pl-6">
//                   <div
//                     className={`bg-white rounded-xl p-6 border border-gray-200 shadow-lg transition-all duration-300 transform ${
//                       activeStepIndex === index
//                         ? "scale-105 shadow-xl shadow-teal-500/10"
//                         : ""
//                     } relative group hover:shadow-lg`}
//                   >
//                     {/* Color accent */}
//                     <div
//                       className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${step.gradient} rounded-l-xl`}
//                     ></div>

//                     <div className="flex items-center mb-4 pl-2">
//                       <div
//                         className={`bg-gradient-to-br ${
//                           step.gradient
//                         } rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-lg transition-all duration-300 ${
//                           activeStepIndex === index ? "scale-110" : ""
//                         }`}
//                       >
//                         {step.icon}
//                       </div>
//                       <h3 className="text-gray-800 text-xl font-semibold">
//                         {step.title}
//                       </h3>
//                     </div>
//                     <p className="text-gray-600 pl-2">{step.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Contact Us Section
// const ContactUs = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeContact, setActiveContact] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById("contact");
//       if (section) {
//         const rect = section.getBoundingClientRect();
//         const isInView =
//           rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
//         setIsVisible(isInView);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Check on initial render

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className="bg-gradient-to-t from-gray-950 to-gray-100 py-20 relative"
//       id="contact"
//     >
//       {/* Background elements */}
//       <div className="absolute top-20 left-10 w-32 h-32 bg-teal-100 rounded-full opacity-30 blur-3xl"></div>
//       <div className="absolute bottom-20 right-20 w-40 h-40 bg-fuchsia-100 rounded-full opacity-30 blur-3xl"></div>

//       <div className="container mx-auto px-6">
//         <div
//           className={`text-center mb-16 transition-all duration-1000 transform ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <span className="text-sm font-medium bg-gradient-to-r from-teal-600 to-indigo-600 text-transparent bg-clip-text py-1 px-3 rounded-full bg-gray-100">
//             Get In Touch
//           </span>
//           <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-indigo-800 to-gray-800 text-transparent bg-clip-text mt-3 mb-3">
//             Contact Us
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-indigo-500 mx-auto mb-6 rounded-full"></div>
//           <p className="text-gray-700 max-w-2xl mx-auto">
//             Have questions or ready to get started? Our team is here to help
//             you.
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-10">
//           {/* Contact Form */}
//           <div
//             className={`lg:w-2/3 bg-white rounded-xl p-8 border border-gray-200 shadow-xl relative overflow-hidden transition-all duration-1000 transform ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10"
//             }`}
//           >
//             {/* Glass morphism effect */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-teal-100/20 to-fuchsia-100/20 backdrop-blur-3xl opacity-50"></div>

//             {/* Decorative corner elements */}
//             <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-teal-400 opacity-60"></div>
//             <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-fuchsia-400 opacity-60"></div>

//             <div className="relative z-10">
//               <h3 className="text-black text-xl font-semibold mb-6">
//                 Send Us a Message
//               </h3>
//               <form className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-gray-700 mb-2 text-sm">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full bg-gray-50/70 backdrop-blur-sm border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-colors"
//                       placeholder="Enter your name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-2 text-sm">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       className="w-full bg-gray-50/70 backdrop-blur-sm border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-colors"
//                       placeholder="Enter your email"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-2 text-sm">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full bg-gray-50/70 backdrop-blur-sm border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-colors"
//                     placeholder="How can we help you?"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-2 text-sm">
//                     Message
//                   </label>
//                   <textarea
//                     className="w-full bg-gray-50/70 backdrop-blur-sm border border-gray-300 rounded-lg px-4 py-3 text-black h-32 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-colors"
//                     placeholder="Tell us more about your needs..."
//                   ></textarea>
//                 </div>

//                 <button className="relative overflow-hidden bg-gradient-to-r from-teal-400 to-fuchsia-500 hover:from-teal-500 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center group">
//                   <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-400/0 via-white/30 to-teal-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
//                   <span className="relative flex items-center">
//                     Send Message
//                     <Send
//                       size={16}
//                       className="ml-2 group-hover:translate-x-1 transition-transform"
//                     />
//                   </span>
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="lg:w-1/3 space-y-6">
//             {[
//               {
//                 icon: <Mail size={20} className="text-black" />,
//                 title: "Email",
//                 details: ["info@yourcompany.com", "support@yourcompany.com"],
//                 bg: "bg-teal-400",
//                 iconBg: "bg-teal-200",
//                 index: 0,
//               },
//               {
//                 icon: <Phone size={20} className="text-black" />,
//                 title: "Phone",
//                 details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
//                 bg: "bg-fuchsia-400",
//                 iconBg: "bg-fuchsia-200",
//                 index: 1,
//               },
//               {
//                 icon: <MapPin size={20} className="text-black" />,
//                 title: "Location",
//                 details: [
//                   "123 Business Avenue",
//                   "Suite 400",
//                   "New York, NY 10001",
//                 ],
//                 bg: "bg-indigo-400",
//                 iconBg: "bg-indigo-200",
//                 index: 2,
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className={`bg-gray-950 rounded-xl p-6 border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-700 transform ${
//                   isVisible
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-10"
//                 } ${activeContact === index ? "scale-105" : ""}`}
//                 style={{ transitionDelay: `${300 + index * 200}ms` }}
//                 onMouseEnter={() => setActiveContact(index)}
//                 onMouseLeave={() => setActiveContact(null)}
//               >
//                 <div className="flex items-start">
//                   <div
//                     className={`${
//                       item.iconBg
//                     } rounded-full p-3 mr-4 transition-all duration-300 ${
//                       activeContact === index ? "scale-110" : ""
//                     }`}
//                   >
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h4 className="text-white font-medium mb-1">
//                       {item.title}
//                     </h4>
//                     {item.details.map((line, i) => (
//                       <p key={i} className="text-gray-300">
//                         {line}
//                       </p>
//                     ))}
//                   </div>
//                 </div>
//                 <div
//                   className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-${item.bg.replace(
//                     "bg-",
//                     ""
//                   )} to-indigo-500 transform ${
//                     activeContact === index ? "scale-100" : "scale-0"
//                   } origin-left transition-transform duration-300 rounded-b-xl`}
//                 ></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Send,
  Search,
  Lightbulb,
  Settings,
  Check,
  Code,
  PenTool,
  Inbox,
  MessageSquare,
  Clock,
  Zap,
  Shield,
  BarChart,
} from "lucide-react";

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-sans text-black w-full overflow-hidden bg-white">
      <Hero scrollY={scrollY} />
      <WhatWeOffer />
      <HowItWorks />
      <ContactUs />
    </div>
  );
};

// Hero Section
const Hero = ({ scrollY }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      id="hero-container"
      className="bg-gradient-to-br from-white via-blue-50 to-gray-50 text-black min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Improved background elements */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-100 blur-3xl opacity-40 animate-pulse"
        style={{ animationDuration: "15s" }}
      ></div>
      <div
        className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-purple-100 blur-3xl opacity-30 animate-pulse"
        style={{ animationDuration: "20s", animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-2/3 left-1/2 w-48 h-48 rounded-full bg-indigo-100 blur-3xl opacity-40 animate-pulse"
        style={{ animationDuration: "18s", animationDelay: "2s" }}
      ></div>

      {/* Floating email UI elements */}
      <div className="absolute right-10 top-1/4 md:block hidden">
        <div className="bg-white/90 rounded-xl shadow-lg p-4 w-64 transform rotate-3 hover:rotate-0 transition-all duration-500 backdrop-blur-sm border border-gray-100">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Mail size={20} className="text-blue-600" />
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium">New Message</h4>
              <p className="text-xs text-gray-500">from client@example.com</p>
            </div>
          </div>
          <div className="text-xs text-gray-600 mb-3">
            Can we schedule a meeting for next week to discuss...
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs py-1 px-3 rounded flex items-center">
            <span>Generate Reply</span>
            <Zap size={12} className="ml-1" />
          </button>
        </div>
      </div>

      <div className="absolute left-10 bottom-1/4 md:block hidden">
        <div className="bg-white/90 rounded-xl shadow-lg p-4 w-64 transform -rotate-2 hover:rotate-0 transition-all duration-500 backdrop-blur-sm border border-gray-100">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <Check size={16} className="text-green-600" />
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium">Reply Generated</h4>
              <p className="text-xs text-gray-500">in 0.8 seconds</p>
            </div>
          </div>
          <div className="text-xs text-gray-600 mb-3">
            I'd be happy to meet next week. How about Tuesday at 2pm?
          </div>
          <div className="flex space-x-2">
            <button className="bg-green-500 hover:bg-green-600 text-white text-xs py-1 px-3 rounded">
              Send
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs py-1 px-3 rounded">
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-16 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <div
              className={`mb-4 flex items-center transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="bg-blue-100 text-blue-600 text-sm font-medium py-1 px-3 rounded-full border border-blue-200">
                AI-Powered Email Assistant
              </span>
            </div>
            <h1
              className={`text-5xl md:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 delay-300 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="text-black">Smart</span>{" "}
              <span className="text-blue-500">Gmail</span>{" "}
              <span className="text-indigo-500">Replies</span>{" "}
              <span className="text-black">in</span>{" "}
              <span className="text-purple-500">1 Click</span>
            </h1>
            <p
              className={`text-gray-600 text-lg mb-8 max-w-2xl transition-all duration-1000 delay-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Connect your inbox with Google's Gemini API to generate professional email replies instantly.
              Select an email, hit "Generate Reply," and send with confidence. Perfect for busy professionals.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center group">
                <span className="flex items-center">
                  Get Started
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>
              <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center">
                See How It Works
              </button>
            </div>
          </div>

          {/* Added visual mockup */}
          <div
            className={`md:w-1/2 mt-10 md:mt-0 transition-all duration-1000 delay-800 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl p-6 md:ml-10 border border-gray-200 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Mail size={20} className="text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">AI Gmail Assistant</h3>
                      <p className="text-sm text-gray-500">Connected to your inbox</p>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                    Active
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">Meeting Request</span>
                      <span className="text-xs text-gray-500">12:42 PM</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Hi there, I'd like to schedule a meeting to discuss the project progress...
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded-lg flex items-center">
                      <Zap size={14} className="mr-1" />
                      Generate Reply
                    </button>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">Product Inquiry</span>
                      <span className="text-xs text-gray-500">10:15 AM</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      I'm interested in your services. Could you provide more information...
                    </p>
                    <div className="bg-white p-3 rounded border border-dashed border-blue-300 mb-2">
                      <p className="text-sm text-gray-700">
                        Thank you for your interest! I'd be happy to provide more details about our services...
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-green-500 hover:bg-green-600 text-white text-sm py-1 px-3 rounded-lg">
                        Send
                      </button>
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm py-1 px-3 rounded-lg">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl -z-10 transform rotate-3"></div>
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl -z-20 transform -rotate-3"></div>
            </div>
          </div>
        </div>

        {/* Abstract shape divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M0,150 L0,100 Q125,50 250,100 T500,100 L500,150 Z"
              fill="rgba(249, 250, 251, 0.8)"
            ></path>
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

// What We Offer Section
const WhatWeOffer = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("services");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView =
          rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Mail size={28} className="text-white" />,
      bgColor: "bg-blue-500",
      title: "Gmail Integration",
      description:
        "Seamlessly connects with your Gmail inbox to access and respond to emails with one click.",
    },
    {
      icon: <MessageSquare size={28} className="text-white" />,
      bgColor: "bg-indigo-500",
      title: "AI-Powered Replies",
      description:
        "Leverages Google's Gemini API to generate professional, context-aware email responses.",
    },
    {
      icon: <Clock size={28} className="text-white" />,
      bgColor: "bg-purple-500",
      title: "Time-Saving",
      description:
        "Save hours every week with instant, professionally crafted email replies.",
    },
    {
      icon: <Inbox size={28} className="text-white" />,
      bgColor: "bg-blue-600",
      title: "Seamless Workflow",
      description:
        "Uses Gmail pipelining for smooth access to emails and one-click sending.",
    },
  ];

  return (
    <div className="bg-gray-50 py-20 relative" id="services">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-100 rounded-full opacity-30 blur-xl"></div>

      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium text-gray-600 bg-gray-100 py-1 px-3 rounded-full">
            Our Features
          </span>
          <h2 className="text-4xl font-bold text-black mt-3 mb-3">
            What We Offer
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our AI Gmail Assistant can transform your email workflow and save you hours every week.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all transform duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
                transform:
                  activeCardIndex === index ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setActiveCardIndex(index)}
              onMouseLeave={() => setActiveCardIndex(null)}
            >
              <div
                className={`rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 ${service.bgColor} transition-transform transform group-hover:scale-110 duration-500 shadow-md`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// How It Works Section
const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("process");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView =
          rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      icon: <Inbox size={28} className="text-white" />,
      title: "Connect Gmail",
      description:
        "Authorize the app to access your Gmail inbox securely using Google's authentication.",
      color: "bg-blue-500",
    },
    {
      icon: <Search size={28} className="text-white" />,
      title: "Select Email",
      description:
        "Choose any email in your inbox that needs a response with a single click.",
      color: "bg-indigo-500",
    },
    {
      icon: <MessageSquare size={28} className="text-white" />,
      title: "Generate Reply",
      description:
        "With one click, Gemini API analyzes the email and generates a professional response.",
      color: "bg-purple-500",
    },
    {
      icon: <Send size={28} className="text-white" />,
      title: "Send or Edit",
      description:
        "Review the generated reply, make any adjustments if needed, and send it instantly.",
      color: "bg-blue-600",
    },
  ];

  return (
    <div className="bg-white py-20 relative" id="process">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div
          className="absolute top-40 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
        <div
          className="absolute bottom-40 left-10 w-32 h-32 bg-purple-100 rounded-full opacity-30 blur-3xl animate-pulse"
          style={{ animationDuration: "15s", animationDelay: "2s" }}
        ></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium text-gray-600 bg-gray-100 py-1 px-3 rounded-full">
            Our Process
          </span>
          <h2 className="text-4xl font-bold text-black mt-3 mb-3">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Generate professional email responses in seconds with our simple, four-step process.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main vertical line - now in lighter color */}
          <div className="absolute left-24 top-0 bottom-0 w-1 bg-gray-200 z-0 rounded-full"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex transition-all duration-1000 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveStepIndex(index)}
                onMouseLeave={() => setActiveStepIndex(null)}
              >
                {/* Timeline node with number */}
                <div className="w-48 flex justify-center relative">
                  <div
                    className={`bg-white border-2 border-${step.color.replace(
                      "bg-",
                      ""
                    )} rounded-full w-12 h-12 flex items-center justify-center z-10 absolute left-24 transform -translate-x-1/2 transition-all duration-300 ${
                      activeStepIndex === index ? "scale-110" : ""
                    }`}
                  >
                    <span className="text-black font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className="flex-1 pl-6">
                  <div
                    className={`bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-all duration-300 transform ${
                      activeStepIndex === index
                        ? "scale-105 shadow-md"
                        : ""
                    } relative group hover:shadow-md`}
                  >
                    {/* Color accent */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 ${step.color} rounded-l-xl`}
                    ></div>

                    <div className="flex items-center mb-4 pl-2">
                      <div
                        className={`${
                          step.color
                        } rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-md transition-all duration-300 ${
                          activeStepIndex === index ? "scale-110" : ""
                        }`}
                      >
                        {step.icon}
                      </div>
                      <h3 className="text-gray-800 text-xl font-semibold">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 pl-2">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Us Section
const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeContact, setActiveContact] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView =
          rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="bg-gray-50 py-20 relative"
      id="contact"
    >
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium text-gray-600 bg-gray-100 py-1 px-3 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold text-black mt-3 mb-3">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our AI Gmail Assistant? Our team is here to help you get started.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <div
            className={`lg:w-2/3 bg-white rounded-xl p-8 border border-gray-200 shadow-md relative overflow-hidden transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Subtle glass effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-purple-50 opacity-30"></div>

            {/* Decorative corner elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-blue-300 opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-purple-300 opacity-50"></div>

            <div className="relative z-10">
              <h3 className="text-black text-xl font-semibold mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-50/70 border border-gray-200 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-gray-50/70 border border-gray-200 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 text-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50/70 border border-gray-200 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-gray-50/70 border border-gray-200 rounded-lg px-4 py-3 text-black h-32 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-colors"
                    placeholder="Tell us more about your needs..."
                  ></textarea>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center group">
                  <span className="flex items-center">
                    Send Message
                    <Send
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-6">
            {[
              {
                icon: <Mail size={20} className="text-gray-800" />,
                title: "Email",
                details: ["codingxcringe@gmail.com"],
                bg: "bg-blue-100",
                index: 0,
              },

              {
                icon: <MapPin size={20} className="text-gray-800" />,
                title: "Location",
                details: [
                  "Bennett University"
                ],
                bg: "bg-purple-100",
                index: 2,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-700 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${activeContact === index ? "scale-105" : ""} relative`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
                onMouseEnter={() => setActiveContact(index)}
                onMouseLeave={() => setActiveContact(null)}
              >
                <div className="flex items-start">
                  <div
                    className={`${
                      item.bg
                    } rounded-full p-3 mr-4 transition-all duration-300 ${
                      activeContact === index ? "scale-110" : ""
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-medium mb-1">
                      {item.title}
                    </h4>
                    {item.details.map((line, i) => (
                      <p key={i} className="text-gray-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-blue-500 transform ${
                    activeContact === index ? "scale-100" : "scale-0"
                  } origin-left transition-transform duration-300 rounded-b-xl`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;