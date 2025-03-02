"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Building,
  CheckCircle,
  ClipboardList,
  Database,
  Globe,
  Heart,
  Home,
  Info,
  Mail,
  Menu,
  MessageSquare,
  Moon,
  Phone,
  School,
  Settings,
  ShoppingBag,
  Star,
  Sun,
  Utensils,
  X,
  Users,
  BarChart,
  Zap,
  Shield,
  MapPin,
} from "lucide-react"

import { Button } from "./components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Label } from "./components/ui/label"
export default function HornBusinessSolution() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle dark mode toggle
  useEffect(() => {
    // Check for user preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`flex min-h-screen flex-col ${isDarkMode ? "dark" : ""}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-slate-900/95 dark:border-slate-800 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}>
        <div className="container flex h-24 items-center justify-between">
          <div className="flex items-center gap-4">
            <Building className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold tracking-tight dark:text-white">
              Horn Business Solution
            </span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="#home"
              className="text-sm font-medium hover:text-primary transition-colors dark:text-slate-200 dark:hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors dark:text-slate-200 dark:hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors dark:text-slate-200 dark:hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#industries"
              className="text-sm font-medium hover:text-primary transition-colors dark:text-slate-200 dark:hover:text-primary"
            >
              Industries
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors dark:text-slate-200 dark:hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors dark:text-slate-200 dark:hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={toggleDarkMode}
                    className="rounded-full"
                  >
                    {isDarkMode ? (
                      <Sun className="h-5 w-5 text-yellow-400" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isDarkMode ? "Switch to light mode" : "Switch to dark mode"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground"
            >
              Get Started
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background dark:bg-slate-900 md:hidden">
            <div className="container flex h-16 items-center justify-between">
              <div className="flex items-center gap-2">
                <Building className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold dark:text-white">
                  Horn Business Solution
                </span>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="container grid gap-6 p-6">
              <Link
                href="#home"
                className="flex items-center gap-2 text-lg font-medium dark:text-white"
                onClick={toggleMenu}
              >
                <Home className="h-5 w-5" />
                Home
              </Link>
              <Link
                href="#about"
                className="flex items-center gap-2 text-lg font-medium dark:text-white"
                onClick={toggleMenu}
              >
                <Info className="h-5 w-5" />
                About
              </Link>
              <Link
                href="#services"
                className="flex items-center gap-2 text-lg font-medium dark:text-white"
                onClick={toggleMenu}
              >
                <Settings className="h-5 w-5" />
                Services
              </Link>
              <Link
                href="#industries"
                className="flex items-center gap-2 text-lg font-medium dark:text-white"
                onClick={toggleMenu}
              >
                <Building className="h-5 w-5" />
                Industries
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center gap-2 text-lg font-medium dark:text-white"
                onClick={toggleMenu}
              >
                <MessageSquare className="h-5 w-5" />
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="flex items-center gap-2 text-lg font-medium dark:text-white"
                onClick={toggleMenu}
              >
                <Mail className="h-5 w-5" />
                Contact
              </Link>
              <Button className="w-full">Get Started</Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-pink-100 py-32 lg:py-48 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
        >
          <div className="container relative">
            <div className="grid gap-16 md:grid-cols-2 items-center">
              <div className="flex flex-col gap-8 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
                <Badge className="w-fit mx-auto md:mx-0 text-sm py-1.5 px-4 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground">
                  Innovative Business Solutions
                </Badge>
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl dark:text-white">
                  Empowering{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500">
                    Businesses
                  </span>
                  <br />
                  with Smart
                  <br />
                  Solutions
                </h1>
                <p className="text-xl text-slate-600 max-w-xl leading-relaxed dark:text-slate-300">
                  Transform your business with our innovative technology
                  solutions. We help companies streamline operations, boost
                  productivity, and achieve sustainable growth in the digital
                  age.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 dark:bg-primary dark:text-primary-foreground"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 text-lg h-14 px-8 dark:border-primary dark:text-primary-foreground dark:hover:bg-primary/20"
                  >
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-8 pt-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden">
                        <Image
                          src={`https://randomuser.me/api/portraits/men/${i + 30}.jpg`}
                          alt={`Client ${i}`}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                      +50
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Trusted by <span className="font-bold">500+</span> businesses worldwide
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[600px] lg:h-[700px] w-full max-w-3xl mx-auto">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-3xl"></div>
                <Image
                  src="https://i.pinimg.com/736x/ef/39/31/ef3931116f6566a3544aeea1cf0fd140.jpg"
                  alt="Digital Transformation"
                  fill
                  className="object-contain z-10 relative"
                  priority
                />
                <div className="absolute -bottom-10 -right-10 md:bottom-20 md:right-0 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-xl z-20 max-w-xs animate-bounce-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium dark:text-white">Smart Solutions</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Trusted by industry leaders</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-10 -left-10 md:top-20 md:left-0 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-xl z-20 max-w-xs animate-pulse-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium dark:text-white">Innovative Tech</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Cutting-edge solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-[800px] w-[800px] rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/20"></div>
            <div className="absolute -bottom-40 -left-40 h-[800px] w-[800px] rounded-full bg-pink-100/50 blur-3xl dark:bg-pink-900/20"></div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">500+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Clients Worldwide</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">15+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">98%</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Support Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-32 bg-white dark:bg-slate-900">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <Card className="p-8 border-none shadow-lg dark:bg-slate-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl dark:text-white">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed dark:text-slate-300">
                    To empower businesses with smart, technology-driven
                    solutions that enhance efficiency, drive growth, and create
                    a competitive edge in the digital age.
                  </p>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">Deliver innovative business management systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">Streamline operations through automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">Provide exceptional customer service and support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-8 border-none shadow-lg dark:bg-slate-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl dark:text-white">
                    <Globe className="h-6 w-6 text-primary" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed dark:text-slate-300">
                    To be the leading provider of customized business management
                    solutions that transform industries and redefine business
                    success.
                  </p>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">Lead innovation in business technology solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">Expand our global footprint across industries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">Create lasting positive impact for our clients</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section
          id="about"
          className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
        >
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <Badge className="mb-6 text-sm py-1.5 px-4 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground">
                Our Story
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 dark:text-white">
                About Horn Business Solution
              </h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed dark:text-slate-300">
                At Horn Business Solution, we specialize in delivering tailored
                business management systems to meet the needs of various
                industries, with a focus on cutting-edge technology and
                exceptional service.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4 dark:text-white">Our Journey</h3>
                <p className="text-muted-foreground mb-6 dark:text-slate-300">
                  Founded in 2015, Horn Business Solution began with a simple
                  mission: to help businesses leverage technology to achieve
                  their full potential. What started as a small team of
                  passionate tech enthusiasts has grown into a comprehensive
                  business solutions provider trusted by companies across
                  multiple industries.
                </p>
                <p className="text-muted-foreground mb-6 dark:text-slate-300">
                  Our solutions help businesses operate efficiently and
                  effectively, reducing workload and increasing profitability.
                  With years of experience, we understand the challenges
                  businesses face and provide innovative solutions to solve
                  them.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-white rounded-lg shadow-sm dark:bg-slate-800">
                    <p className="text-3xl font-bold text-primary">500+</p>
                    <p className="text-sm text-muted-foreground dark:text-slate-400">
                      Clients Served
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm dark:bg-slate-800">
                    <p className="text-3xl font-bold text-primary">15+</p>
                    <p className="text-sm text-muted-foreground dark:text-slate-400">Countries</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm dark:bg-slate-800">
                    <p className="text-3xl font-bold text-primary">98%</p>
                    <p className="text-sm text-muted-foreground dark:text-slate-400">
                      Client Satisfaction
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm dark:bg-slate-800">
                    <p className="text-3xl font-bold text-primary">24/7</p>
                    <p className="text-sm text-muted-foreground dark:text-slate-400">Support</p>
                  </div>
                </div>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Horn Business Solution Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg flex items-center justify-center text-white">
                  <div className="text-center">
                    <p className="text-2xl font-bold">8+</p>
                    <p className="text-xs">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-12 dark:bg-slate-800">
              <h3 className="text-2xl font-bold mb-6 text-center dark:text-white">
                Our Core Values
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 border rounded-lg hover:border-primary transition-all dark:border-slate-700 dark:hover:border-primary group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 dark:text-white">Innovation</h4>
                  <p className="text-muted-foreground dark:text-slate-400">
                    We constantly evolve to offer the latest business
                    technologies, staying ahead of industry trends to provide
                    cutting-edge solutions.
                  </p>
                </div>

                <div className="p-6 border rounded-lg hover:border-primary transition-all dark:border-slate-700 dark:hover:border-primary group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 dark:text-white">Integrity</h4>
                  <p className="text-muted-foreground dark:text-slate-400">
                    We ensure transparency, trust, and reliability in our
                    services, building long-term relationships based on honesty
                    and ethical practices.
                  </p>
                </div>

                <div className="p-6 border rounded-lg hover:border-primary transition-all dark:border-slate-700 dark:hover:border-primary group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 dark:text-white">
                    Customer-Centric
                  </h4>
                  <p className="text-muted-foreground dark:text-slate-400">
                    We prioritize client needs and provide tailored solutions,
                    ensuring that every system we develop addresses specific
                    business challenges.
                  </p>
                </div>

                <div className="p-6 border rounded-lg hover:border-primary transition-all dark:border-slate-700 dark:hover:border-primary group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 dark:text-white">Efficiency</h4>
                  <p className="text-muted-foreground dark:text-slate-400">
                    We enhance business productivity through smart automation,
                    streamlining processes to save time, reduce costs, and
                    maximize output.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">Our Team</h3>
                <p className="text-muted-foreground mb-4 dark:text-slate-300">
                  Our diverse team of experts brings together decades of
                  combined experience in software development, business
                  analysis, project management, and customer support. We're
                  passionate about technology and committed to delivering
                  exceptional results.
                </p>
                <p className="text-muted-foreground mb-6 dark:text-slate-300">
                  Led by industry veterans with backgrounds in enterprise
                  software, cloud computing, and digital transformation, our
                  team stays at the forefront of technological advancements to
                  ensure our clients receive the most innovative solutions.
                </p>
                <Button className="dark:bg-primary dark:text-primary-foreground">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900"
        >
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <Badge className="mb-4 text-sm py-1.5 px-4 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground">
                What We Offer
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 dark:text-white">
                Our Services
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl dark:text-slate-300">
                We offer a comprehensive range of business management solutions
                designed with cutting-edge technology to meet the needs of
                different industries.
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full mb-12">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-5 w-fit">
                  <TabsTrigger value="all">All Services</TabsTrigger>
                  <TabsTrigger value="inventory">Inventory</TabsTrigger>
                  <TabsTrigger value="school">Education</TabsTrigger>
                  <TabsTrigger value="restaurant">Restaurant</TabsTrigger>
                  <TabsTrigger value="custom">Custom</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <div className="group">
                    <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Inventory Management System"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center mb-2">
                          <Database className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          Inventory Management
                        </h3>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg transition-all group-hover:border-primary group-hover:shadow-md dark:border-slate-700 dark:group-hover:border-primary">
                      <p className="text-muted-foreground mb-4 dark:text-slate-300">
                        Our advanced inventory management system helps businesses
                        track stock levels, optimize supply chains, and make
                        data-driven decisions.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground mb-4 dark:text-slate-400">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Real-time stock tracking with barcode/RFID integration
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Automated reordering and supplier management
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Advanced analytics and forecasting tools
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Multi-location inventory synchronization
                        </li>
                      </ul>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group-hover:bg-primary group-hover:text-white dark:border-slate-600 dark:text-slate-200 dark:group-hover:bg-primary dark:group-hover:text-white"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>

                  <div className="group">
                    <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="School Management System"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center mb-2">
                          <School className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          School Management
                        </h3>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg transition-all group-hover:border-primary group-hover:shadow-md dark:border-slate-700 dark:group-hover:border-primary">
                      <p className="text-muted-foreground mb-4 dark:text-slate-300">
                        Our comprehensive school management system streamlines
                        administrative tasks, enhances communication, and improves
                        educational outcomes.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground mb-4 dark:text-slate-400">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Digital student records with secure access controls
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Automated attendance tracking with parent notifications
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Integrated learning management system
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Online fee payment and financial management
                        </li>
                      </ul>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group-hover:bg-primary group-hover:text-white dark:border-slate-600 dark:text-slate-200 dark:group-hover:bg-primary dark:group-hover:text-white"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>

                  <div className="group">
                    <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Restaurant Management System"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center mb-2">
                          <Utensils className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          Restaurant Management
                        </h3>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg transition-all group-hover:border-primary group-hover:shadow-md dark:border-slate-700 dark:group-hover:border-primary">
                      <p className="text-muted-foreground mb-4 dark:text-slate-300">
                        Our restaurant management system helps food service
                        businesses streamline operations, enhance customer
                        experience, and boost profitability.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground mb-4 dark:text-slate-400">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Intuitive POS with tableside ordering capabilities
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Real-time kitchen display system with order tracking
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Inventory management with ingredient-level tracking
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Customer loyalty program and reservation system
                        </li>
                      </ul>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group-hover:bg-primary group-hover:text-white dark:border-slate-600 dark:text-slate-200 dark:group-hover:bg-primary dark:group-hover:text-white"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>

                  <div className="group">
                    <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Custom Business Solutions"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center mb-2">
                          <Settings className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          Custom Solutions
                        </h3>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg transition-all group-hover:border-primary group-hover:shadow-md dark:border-slate-700 dark:group-hover:border-primary">
                      <p className="text-muted-foreground mb-4 dark:text-slate-300">
                        We develop tailored business solutions that address your
                        specific challenges and requirements, leveraging the latest
                        technologies.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground mb-4 dark:text-slate-400">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Custom software development with agile methodology
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          AI and machine learning integration
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          Cloud-based solutions with robust security
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          API development and system integration
                        </li>
                      </ul>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group-hover:bg-primary group-hover:text-white dark:border-slate-600 dark:text-slate-200 dark:group-hover:bg-primary dark:group-hover:text-white"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="inventory">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Inventory Management System"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">Inventory Management System</h3>
                    <p className="text-muted-foreground mb-6 dark:text-slate-300">
                      Our inventory management system is designed to help businesses of all sizes track, manage, and optimize their inventory with precision and ease. From small retail shops to large warehouses, our solution scales to meet your needs.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                          <Database className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold dark:text-white">Real-time Tracking</h4>
                          <p className="text-sm text-muted-foreground dark:text-slate-400">Monitor stock levels across multiple locations in real-time with instant updates.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                          <BarChart className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold dark:text-white">Advanced Analytics</h4>
                          <p className="text-sm text-muted-foreground dark:text-slate-400">Gain insights with powerful reporting tools and predictive analytics for demand forecasting.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold dark:text-white">Automation</h4>
                          <p className="text-sm text-muted-foreground dark:text-slate-400">Automate reordering, supplier management, and inventory alerts to prevent stockouts.</p>
                        </div>
                      </div>
                    </div>
                    <Button className="dark:bg-primary dark:text-primary-foreground">
                      Request Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="school">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">School Management System</h3>
                    <p className="text-muted-foreground mb-6 dark:text-slate-300">
                      Our comprehensive school management system is designed to streamline administrative tasks, enhance communication between teachers, students, and parents, and improve overall educational outcomes.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold dark:text-white">Student Information System</h4>
                          <p className="text-sm text-muted-foreground dark:text-slate-400">Securely manage student records, attendance, grades, and performance analytics.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                          <MessageSquare className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold dark:text-white">Communication Portal</h4>
                          <p className="text-sm text-muted-foreground dark:text-slate-400">Facilitate seamless communication between teachers, students, and parents.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                          <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold dark:text-white">Learning Management</h4>
                          <p className="text-sm text-muted-foreground dark:text-slate-400">Integrated platform for assignments, resources, and online learning materials.</p>
                        </div>
                      </div>
                    </div>
                    <Button className="dark:bg-primary dark:text-primary-foreground">
                      Request Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="School Management System"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="restaurant">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Restaurant Management System"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">Restaurant Management System</h3>
                    <p className="text-muted-foreground mb-6 dark:text-slate-300">
                      Our restaurant management system is a complete solution for food service businesses of all sizes, from small cafes to large restaurant chains, helping them streamline operations and enhance customer experience.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                          <Utensils className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold dark:text-white">Point of Sale (POS)</h4>
                          <p className="text-sm text-muted-foreground dark:text-slate-400">Intuitive POS system with tableside ordering, split bills, and payment processing.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                          <Database className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold dark:text-white">Inventory Control</h4>
                          <p className="text-sm text-muted-foreground dark:text-slate-400">Track ingredients, manage suppliers, and reduce waste with precise inventory management.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold dark:text-white">Customer Management</h4>
                          <p className="text-sm text-muted-foreground dark:text-slate-400">Loyalty programs, reservation system, and customer feedback management.</p>
                        </div>
                      </div>
                    </div>
                    <Button className="dark:bg-primary dark:text-primary-foreground">
                      Request Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="custom">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">Custom Business Solutions</h3>
                    <p className="text-muted-foreground mb-6 dark:text-slate-300">
                      We develop tailored business solutions that address your specific challenges and requirements, leveraging the latest technologies to create systems that perfectly fit your unique business needs.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                          <Settings className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold dark:text-white">Custom Software Development</h4>
                          <p className="text-sm text-muted-foreground dark:text-slate-400">Bespoke software solutions designed specifically for your business processes.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold dark:text-white">AI & Machine Learning</h4>
                          <p className="text-sm text-muted-foreground dark:text-slate-400">Integrate advanced AI capabilities to automate processes and gain predictive insights.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                          <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold dark:text-white">System Integration</h4>
                          <p className="text-sm text-muted-foreground dark:text-slate-400">Connect disparate systems and data sources for seamless information flow.</p>
                        </div>
                      </div>
                    </div>
                    <Button className="dark:bg-primary dark:text-primary-foreground">
                      Schedule Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Custom Business Solutions"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 text-sm py-1.5 px-4 bg-primary/20 text-primary-foreground">
                    Latest Technology
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Cutting-Edge Solutions for Modern Businesses
                  </h3>
                  <p className="text-slate-300 mb-6">
                    Our solutions leverage the latest technologies including AI,
                    cloud computing, IoT, and blockchain to provide businesses
                    with a competitive edge in the digital landscape.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-white">Cloud Integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-white">AI-Powered Analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-white">Mobile Accessibility</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-white">Blockchain Security</span>
                    </div>
                  </div>
                  <Button className="w-fit bg-primary text-primary-foreground hover:bg-primary/90">
                    Explore Technologies
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Advanced Technology"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="py-20 bg-white dark:bg-slate-900">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <Badge className="mb-4 text-sm py-1.5 px-4 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground">
                Our Expertise
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 dark:text-white">
                Industries We Serve
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl dark:text-slate-300">
                We provide specialized solutions tailored to the unique needs of
                various industries, helping businesses across sectors thrive in
                the digital age.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/20 z-10"></div>
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Retail & E-commerce"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                  <div className="w-12 h-12 rounded-lg bg-primary/80 flex items-center justify-center mb-3">
                    <ShoppingBag className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Retail & E-commerce
                  </h3>
                  <p className="text-sm text-slate-200 mb-4 max-w-xs">
                    Comprehensive inventory management, POS systems, and
                    e-commerce platforms that streamline operations and enhance
                    customer experience.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-fit border-white text-white hover:bg-white/20"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/20 z-10"></div>
                <Image
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Education"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                  <div className="w-12 h-12 rounded-lg bg-primary/80 flex items-center justify-center mb-3">
                    <School className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Education</h3>
                  <p className="text-sm text-slate-200 mb-4 max-w-xs">
                    Integrated school management systems that handle everything
                    from admissions and attendance to examinations and online
                    learning.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-fit border-white text-white hover:bg-white/20"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/20 z-10"></div>
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Hospitality"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                  <div className="w-12 h-12 rounded-lg bg-primary/80 flex items-center justify-center mb-3">
                    <Utensils className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Hospitality</h3>
                  <p className="text-sm text-slate-200 mb-4 max-w-xs">
                    End-to-end solutions for restaurants, hotels, and resorts
                    that optimize guest experience, staff management, and
                    operational efficiency.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-fit border-white text-white hover:bg-white/20"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex gap-4 p-6 border rounded-lg hover:shadow-md hover:border-primary transition-all dark:border-slate-700 dark:hover:border-primary">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">Healthcare</h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-400">
                    HIPAA-compliant patient management systems, appointment
                    scheduling, and medical record solutions that enhance
                    patient care and streamline administrative tasks.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 border rounded-lg hover:shadow-md hover:border-primary transition-all dark:border-slate-700 dark:hover:border-primary">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                  <ClipboardList className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">Manufacturing</h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-400">
                    Production planning, inventory control, and supply chain
                    management solutions that optimize manufacturing processes
                    and reduce operational costs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 border rounded-lg hover:shadow-md hover:border-primary transition-all dark:border-slate-700 dark:hover:border-primary">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">Real Estate</h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-400">
                    Property management, client relationship management, and
                    document automation systems that streamline real estate
                    operations and improve client satisfaction.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 border rounded-lg hover:shadow-md hover:border-primary transition-all dark:border-slate-700 dark:hover:border-primary">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">
                    Financial Services
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-400">
                    Secure banking solutions, investment management platforms,
                    and financial reporting systems that ensure compliance and
                    enhance customer trust.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 border rounded-lg hover:shadow-md hover:border-primary transition-all dark:border-slate-700 dark:hover:border-primary">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">
                    Government & Public Sector
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-400">
                    Citizen service portals, document management systems, and
                    public administration solutions that improve government
                    efficiency and transparency.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 border rounded-lg hover:shadow-md hover:border-primary transition-all dark:border-slate-700 dark:hover:border-primary">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 dark:bg-primary/20">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">
                    Logistics & Transportation
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-400">
                    Fleet management, route optimization, and shipment tracking
                    systems that improve logistics efficiency and reduce
                    transportation costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
        >
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <Badge className="mb-4 text-sm py-1.5 px-4 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground">
                Client Success Stories
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 dark:text-white">
                What Our Clients Say
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl dark:text-slate-300">
                Don't just take our word for it. See what our satisfied clients
                have to say about our services and solutions.
              </p>
            </div>

            <div className="relative mb-16">
              <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 dark:bg-slate-700"></div>
              <div className="relative z-10 flex justify-center">
                <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full border shadow-sm dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span className="font-medium dark:text-white">Featured Testimonials</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <Card className="relative overflow-hidden border-none shadow-lg dark:bg-slate-800">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-primary"></div>
                <CardContent className="pt-8">
                  <div className="absolute top-4 right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-200 dark:text-slate-700"
                    >
                      <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                      <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 dark:text-slate-300">
                    "Horn Business Solution has completely transformed the way
                    we manage our inventory. The system is intuitive, powerful,
                    and has helped us reduce stockouts by 75%. Our business is
                    now more efficient than ever, and we've seen a 30% increase
                    in sales since implementation!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                        alt="John Smith"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold dark:text-white">John Smith</p>
                      <p className="text-sm text-muted-foreground dark:text-slate-400">
                        Operations Director, Global Retail Inc.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-none shadow-lg dark:bg-slate-800">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-primary"></div>
                <CardContent className="pt-8">
                  <div className="absolute top-4 right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-200 dark:text-slate-700"
                    >
                      <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                      <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 dark:text-slate-300">
                    "The school management system provided by Horn Business
                    Solution has revolutionized our administrative processes.
                    Parents love the real-time updates, and our staff can focus
                    more on education rather than paperwork. The implementation
                    was smooth, and their support team is always available when
                    we need them."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                        alt="Sarah Johnson"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold dark:text-white">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground dark:text-slate-400">
                        Principal, Westview Academy
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-none shadow-lg dark:bg-slate-800">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-primary"></div>
                <CardContent className="pt-8">
                  <div className="absolute top-4 right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-200 dark:text-slate-700"
                    >
                      <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                      <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 dark:text-slate-300">
                    "The restaurant management system from Horn Business
                    Solution has been a game-changer for our chain of
                    restaurants. We've reduced order errors by 90%, improved
                    table turnover time, and our staff love how easy it is to
                    use. The analytics have given us insights that helped us
                    optimize our menu and increase our profit margins."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                        alt="Michael Chen"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold dark:text-white">Michael Chen</p>
                      <p className="text-sm text-muted-foreground dark:text-slate-400">
                        CEO, Fusion Dining Group
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Client Success Metrics
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white">
                          Customer Satisfaction
                        </span>
                        <span className="text-white">98%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "98%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white">
                          Implementation Success Rate
                        </span>
                        <span className="text-white">100%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white">
                          Average ROI for Clients
                        </span>
                        <span className="text-white">287%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white">
                          Client Retention Rate
                        </span>
                        <span className="text-white">95%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Client Success"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
      <section
          id="contact"
          className="py-20 bg-gradient-to-b from-slate-50 to-white"
        >
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Get In Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Contact Us
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl">
                We'd love to hear from you! Get in touch with us today to
                discuss how we can help improve your business with our
                cutting-edge solutions.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Our friendly team is here to help
                </p>
                <p className="text-lg font-medium text-primary">
                  +1 (555) 123-4567
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  We'll respond within 24 hours
                </p>
                <p className="text-lg font-medium text-primary">
                  info@hornbusiness.com
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-muted-foreground mb-4">
                  Come say hello at our office
                </p>
                <p className="text-lg font-medium text-primary">
                  123 Business Avenue, Suite 200
                  <br />
                  Enterprise City, CA 90210
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your Company Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your inquiry..."
                        className="min-h-[150px]"
                      />
                    </div>
                    <Button className="w-full">
                      Send Message
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                  </form>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Office Hours</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="font-medium">Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="font-medium">Saturday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="font-medium">Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                  <div className="relative h-[300px]">
                    <Image
                      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                      alt="Our Office"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 p-4">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Visit Our Headquarters
                      </h3>
                      <p className="text-white/90">
                        Our modern office is located in the heart of Enterprise
                        City's business district.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">
                  Horn Business Solution
                </span>
              </div>
              <p className="text-slate-400 mb-4">
                Empowering businesses with smart, technology-driven solutions
                that enhance efficiency and drive growth.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#home"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Inventory Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    School Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Restaurant Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Custom Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4 mb-4">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
              <p className="text-slate-400">
                Subscribe to our newsletter for updates
              </p>
              <div className="flex mt-2">
                <Input
                  placeholder="Your email"
                  className="bg-slate-800 border-slate-700 text-white"
                />
                <Button className="ml-2">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>
              © {new Date().getFullYear()} Horn Business Solution. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
