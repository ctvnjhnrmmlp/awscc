'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Award,
  BookOpen,
  Briefcase,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  ExternalLink,
  Eye,
  Flower,
  Github,
  GraduationCap,
  Heart,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Mountain,
  Phone,
  SproutIcon as Seedling,
  Sprout,
  Star,
  Sun,
  Target,
  TreePine,
  Trees,
  Twitter,
  Users,
  X,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AWSCloudClubWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      name: 'Constitution',
      href: '#constitution',
      icon: <BookOpen className='h-4 w-4' />,
    },
    { name: 'Bylaws', href: '#bylaws', icon: <Award className='h-4 w-4' /> },
    { name: 'Vision', href: '#vision', icon: <Eye className='h-4 w-4' /> },
    { name: 'Mission', href: '#mission', icon: <Target className='h-4 w-4' /> },
    { name: 'Events', href: '#events', icon: <Calendar className='h-4 w-4' /> },
    {
      name: 'Workshops',
      href: '#workshops',
      icon: <Sprout className='h-4 w-4' />,
    },
    {
      name: 'Industry',
      href: '#industry',
      icon: <TreePine className='h-4 w-4' />,
    },
    { name: 'Contact', href: '#contact', icon: <Leaf className='h-4 w-4' /> },
  ];

  const goals = [
    {
      icon: <Seedling className='h-8 w-8' />,
      title: 'Cultivate Cloud Skills',
      description:
        'Nurture expertise in AWS services through hands-on learning and growth',
    },
    {
      icon: <Trees className='h-8 w-8' />,
      title: 'Build Community Forest',
      description:
        "Foster a thriving ecosystem of learners supporting each other's journey",
    },
    {
      icon: <Mountain className='h-8 w-8' />,
      title: 'Scale New Heights',
      description: 'Prepare students to reach career peaks in cloud computing',
    },
    {
      icon: <Sun className='h-8 w-8' />,
      title: 'Illuminate Pathways',
      description:
        'Bridge academic learning with industry opportunities and mentorship',
    },
  ];

  const upcomingEvents = [
    {
      title: 'AWS Student Community Day - Southern Luzon',
      date: 'TBA',
      time: '1:00 PM - 7:00 PM',
      description: 'Southern Luzon leg of premier AWS event for students',
      type: 'Conference',
      icon: <Sprout className='h-5 w-5' />,
    },
  ];

  const memberBenefits = [
    'Access to exclusive AWS workshops and nurturing sessions',
    'Networking in our thriving professional ecosystem',
    'Hands-on experience with AWS tools and technologies',
    'Guided preparation for AWS certification milestones',
    'Mentorship programs to help you branch out confidently',
    'Priority access to internship opportunities that bloom',
  ];

  const industryPartners = [
    {
      name: 'Amazon Web Services',
      logo: '/placeholder.svg?height=60&width=120',
    },
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Computer Science Senior',
      content:
        'Joining AWS Cloud Club was like planting a seed that grew into amazing opportunities. The community helped me flourish and land my dream internship!',
      rating: 5,
    },
    {
      name: 'John Dela Cruz',
      role: 'IT Student',
      content:
        "The mentorship here helped me branch out into areas I never thought possible. Now I'm growing my career in cloud computing!",
      rating: 5,
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 to-emerald-50'>
      {/* Navigation */}
      <nav className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full px-4'>
        <div className='bg-white/90 backdrop-blur-md border border-green-200/50 rounded-full shadow-lg px-6 py-3'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <span className='ml-2 text-lg font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent'>
                AWS Cloud Club
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden lg:block'>
              <div className='flex items-center space-x-1'>
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='text-green-700 hover:text-green-900 hover:bg-green-100/80 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1'
                  >
                    {item.icon}
                    <span className='hidden xl:inline'>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className='lg:hidden'>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className='rounded-full hover:bg-green-100/80'
              >
                {mobileMenuOpen ? (
                  <X className='h-5 w-5' />
                ) : (
                  <Menu className='h-5 w-5' />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className='lg:hidden mt-2'>
            <div className='bg-white/95 backdrop-blur-md border border-green-200/50 rounded-2xl shadow-lg p-4'>
              <div className='grid grid-cols-2 gap-2'>
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='text-green-700 hover:text-green-900 hover:bg-green-100/80 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-200'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600'></div>
        <div className='absolute inset-0 bg-black/10'></div>

        {/* Decorative Elements */}
        <div className='absolute top-10 left-10 opacity-20'>
          <Leaf className='h-24 w-24 text-green-200 transform rotate-12' />
        </div>
        <div className='absolute top-20 right-20 opacity-20'>
          <TreePine className='h-32 w-32 text-green-200 transform -rotate-12' />
        </div>
        <div className='absolute bottom-10 left-1/4 opacity-20'>
          <Sprout className='h-20 w-20 text-green-200 transform rotate-45' />
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
          <div className='text-center text-white'>
            <div className='flex justify-center mb-8'>
              <div className='bg-white/20 backdrop-blur-sm rounded-full p-8 border border-white/30'>
                <div className='relative'>
                  <Leaf className='h-20 w-20 text-green-100' />
                  <div className='absolute -bottom-2 -right-2 text-2xl animate-bounce'>
                    🐍
                  </div>
                </div>
              </div>
            </div>

            <h1 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent'>
              AWS Cloud Club
            </h1>
            <p className='text-xl md:text-2xl mb-4 text-green-100'>
              University of Cabuyao
            </p>

            <div className='mb-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-2xl mx-auto'>
              <p className='text-2xl md:text-3xl font-bold mb-2'>
                {`𝗔𝗿𝗲 𝘆𝗲𝘄 𝗿𝗲𝗮𝗱𝘆? 𝗜'𝗺 𝗦𝗨𝗘𝗘𝗘𝗘 𝗿𝗲𝗮𝗱𝘆! ✨`}
              </p>
              <p className='text-lg text-green-100'>
                Join Hebi 🐍 on a journey of growth and discovery in the AWS
                ecosystem
              </p>
            </div>

            <p className='text-lg md:text-xl mb-8 max-w-3xl mx-auto text-green-100'>
              Like a leaf unfurling to explore the world, we nurture students to
              flourish in cloud computing through hands-on learning, community
              growth, and industry connections.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-white text-green-700 hover:bg-green-50 shadow-lg'
              >
                <Seedling className='mr-2 h-5 w-5' />
                Join the Journey
              </Button>
              <Button
                size='lg'
                variant='ghost'
                className='border-white text-white hover:bg-white/10 hover:text-white backdrop-blur-sm'
              >
                <TreePine className='mr-2 h-5 w-5' />
                Explore with Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Goals Section */}
      <section
        id='vision'
        className='py-16 bg-gradient-to-br from-green-50 to-emerald-50'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='flex justify-center mb-4'>
              <div className='bg-green-100 p-3 rounded-full'>
                <Trees className='h-8 w-8 text-green-600' />
              </div>
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-green-900 mb-4'>
              Our Growing Foundation
            </h2>
            <p className='text-lg text-green-700 max-w-2xl mx-auto'>
              Rooted in strong principles, branching toward endless
              possibilities
            </p>
          </div>

          <Accordion
            type='single'
            collapsible
            className='max-w-4xl mx-auto mb-12'
          >
            <AccordionItem value='vision' className='border-green-200'>
              <AccordionTrigger className='text-left hover:text-green-700'>
                <div className='flex items-center'>
                  <div className='bg-green-100 p-2 rounded-full mr-4'>
                    <Eye className='h-6 w-6 text-green-600' />
                  </div>
                  <span className='text-xl font-semibold text-green-900'>
                    Our Vision
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className='text-green-700 text-lg leading-relaxed ml-14'>
                {`To cultivate the Philippines' most vibrant ecosystem of cloud
                computing professionals, where every student can grow, flourish,
                and branch out into successful AWS careers. Like a mighty
                forest, we aim to create a sustainable community that nurtures
                innovation, collaboration, and continuous learning.`}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='mission' className='border-green-200'>
              <AccordionTrigger className='text-left hover:text-green-700'>
                <div className='flex items-center'>
                  <div className='bg-green-100 p-2 rounded-full mr-4'>
                    <Target className='h-6 w-6 text-green-600' />
                  </div>
                  <span className='text-xl font-semibold text-green-900'>
                    Our Mission
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className='text-green-700 text-lg leading-relaxed ml-14'>
                To provide University of Cabuyao students with rich soil for
                growth through comprehensive cloud education, practical AWS
                experience, and meaningful industry connections. We nurture an
                inclusive learning environment where every member can take root,
                grow strong, and reach new heights in cloud technology.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {goals.map((goal, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-lg transition-all duration-300 border-green-200 hover:border-green-300 bg-white/80 backdrop-blur-sm'
              >
                <CardHeader>
                  <div className='flex justify-center mb-4'>
                    <div className='bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-full text-green-600'>
                      {goal.icon}
                    </div>
                  </div>
                  <CardTitle className='text-lg text-green-900'>
                    {goal.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-green-700'>{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='flex justify-center mb-4'>
              <div className='bg-green-100 p-3 rounded-full'>
                <Users className='h-8 w-8 text-green-600' />
              </div>
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-green-900 mb-4'>
              Join Our Growing Community
            </h2>
            <p className='text-lg text-green-700 max-w-2xl mx-auto'>
              Plant your roots with us and watch your potential flourish in our
              nurturing ecosystem
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='relative'>
              <div className='absolute -top-4 -left-4 opacity-20'>
                <Leaf className='h-16 w-16 text-green-300 transform rotate-12' />
              </div>
              <h3 className='text-2xl font-bold text-green-900 mb-6'>
                Member Growth Benefits
              </h3>
              <div className='space-y-4'>
                {memberBenefits.map((benefit, index) => (
                  <div key={index} className='flex items-start'>
                    <div className='bg-green-100 p-1 rounded-full mr-3 mt-1'>
                      <CheckCircle className='h-5 w-5 text-green-600' />
                    </div>
                    <span className='text-green-800'>{benefit}</span>
                  </div>
                ))}
              </div>
              <Button
                size='lg'
                className='mt-8 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg'
              >
                <Heart className='mr-2 h-5 w-5' />
                Plant Your Roots
              </Button>
            </div>

            <div className='space-y-6 relative'>
              <div className='absolute -top-4 -right-4 opacity-20'>
                <Sprout className='h-16 w-16 text-green-300 transform -rotate-12' />
              </div>
              <h3 className='text-2xl font-bold text-green-900'>
                Growth Stories from Our Forest
              </h3>
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className='border-green-200 bg-gradient-to-br from-green-50 to-emerald-50'
                >
                  <CardContent className='pt-6'>
                    <div className='flex items-center mb-4'>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className='h-5 w-5 text-yellow-500 fill-current'
                        />
                      ))}
                    </div>
                    <p className='text-green-800 mb-4 italic'>
                      {`"{testimonial.content}"`}
                    </p>
                    <div className='flex items-center'>
                      <div className='bg-green-100 p-2 rounded-full mr-3'>
                        <Seedling className='h-4 w-4 text-green-600' />
                      </div>
                      <div>
                        <p className='font-semibold text-green-900'>
                          {testimonial.name}
                        </p>
                        <p className='text-sm text-green-600'>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events & Workshops Section */}
      <section
        id='events'
        className='py-16 bg-gradient-to-br from-green-50 to-emerald-50'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='flex justify-center mb-4'>
              <div className='bg-green-100 p-3 rounded-full'>
                <Calendar className='h-8 w-8 text-green-600' />
              </div>
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-green-900 mb-4'>
              Upcoming Growth Opportunities
            </h2>
            <p className='text-lg text-green-700 max-w-2xl mx-auto'>
              Join our flourishing events and workshops designed to help you
              branch out and grow
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className='hover:shadow-lg transition-all duration-300 border-green-200 hover:border-green-300 bg-white/80 backdrop-blur-sm'
              >
                <CardHeader>
                  <div className='flex items-center justify-between mb-2'>
                    <Badge
                      variant='secondary'
                      className='bg-green-100 text-green-800 border-green-200'
                    >
                      <div className='flex items-center gap-1'>
                        {event.icon}
                        {event.type}
                      </div>
                    </Badge>
                    <div className='bg-green-100 p-1 rounded-full'>
                      <Calendar className='h-4 w-4 text-green-600' />
                    </div>
                  </div>
                  <CardTitle className='text-xl text-green-900'>
                    {event.title}
                  </CardTitle>
                  <CardDescription className='text-green-700'>
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='space-y-2 mb-4'>
                    <div className='flex items-center text-sm text-green-700'>
                      <Calendar className='h-4 w-4 mr-2 text-green-600' />
                      {event.date}
                    </div>
                    <div className='flex items-center text-sm text-green-700'>
                      <Clock className='h-4 w-4 mr-2 text-green-600' />
                      {event.time}
                    </div>
                  </div>
                  <Button className='w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white'>
                    <ExternalLink className='mr-2 h-4 w-4' />
                    Join & Grow
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Engagement Section */}
      <section id='industry' className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='flex justify-center mb-4'>
              <div className='bg-green-100 p-3 rounded-full'>
                <TreePine className='h-8 w-8 text-green-600' />
              </div>
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-green-900 mb-4'>
              Industry Forest Network
            </h2>
            <p className='text-lg text-green-700 max-w-2xl mx-auto'>
              Growing connections with leading companies and AWS professionals
              in our thriving ecosystem
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-12 items-center mb-12'>
            <div className='relative'>
              <div className='absolute -top-4 -left-4 opacity-20'>
                <Trees className='h-20 w-20 text-green-300 transform rotate-12' />
              </div>
              <h3 className='text-2xl font-bold text-green-900 mb-6'>
                Professional Growth Network
              </h3>
              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='bg-green-100 p-3 rounded-full mr-4'>
                    <Building className='h-6 w-6 text-green-600' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-green-900 mb-1'>
                      Corporate Partnerships
                    </h4>
                    <p className='text-green-700'>
                      Deep roots with AWS partners and flourishing tech
                      companies
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='bg-green-100 p-3 rounded-full mr-4'>
                    <GraduationCap className='h-6 w-6 text-green-600' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-green-900 mb-1'>
                      Wisdom Circles
                    </h4>
                    <p className='text-green-700'>
                      Regular sessions with industry sages and AWS professionals
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='bg-green-100 p-3 rounded-full mr-4'>
                    <Zap className='h-6 w-6 text-green-600' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-green-900 mb-1'>
                      Growth Opportunities
                    </h4>
                    <p className='text-green-700'>
                      Exclusive access to internships where careers bloom
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='absolute -top-4 -right-4 opacity-20'>
                <Flower className='h-16 w-16 text-green-300 transform -rotate-12' />
              </div>
              <h3 className='text-2xl font-bold text-green-900 mb-6'>
                Our Growing Partners
              </h3>
              <div className='grid grid-cols-2 gap-6'>
                {industryPartners.map((partner, index) => (
                  <div
                    key={index}
                    className='bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200 flex items-center justify-center hover:shadow-md transition-shadow'
                  >
                    <Image
                      src={partner.logo || '/placeholder.svg'}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className='opacity-70 hover:opacity-100 transition-opacity'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='text-center'>
            <Button
              size='lg'
              className='bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg'
            >
              <Briefcase className='mr-2 h-5 w-5' />
              Explore Growth Paths
            </Button>
          </div>
        </div>
      </section>

      {/* Constitution & Bylaws Section */}
      <section
        id='constitution'
        className='py-16 bg-gradient-to-br from-green-50 to-emerald-50'
      >
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <div className='flex justify-center mb-4'>
              <div className='bg-green-100 p-3 rounded-full'>
                <BookOpen className='h-8 w-8 text-green-600' />
              </div>
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-green-900 mb-4'>
              Our Governance Roots
            </h2>
            <p className='text-lg text-green-700'>
              The foundational documents that guide our growing community
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            <Card className='hover:shadow-lg transition-all duration-300 border-green-200 hover:border-green-300 bg-white/80 backdrop-blur-sm'>
              <CardHeader>
                <CardTitle className='flex items-center text-green-900'>
                  <div className='bg-green-100 p-2 rounded-full mr-3'>
                    <BookOpen className='h-6 w-6 text-green-600' />
                  </div>
                  Constitution
                </CardTitle>
                <CardDescription className='text-green-700'>
                  {`The fundamental principles that root our organization's
                  structure and values`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant='outline'
                  className='w-full border-green-300 text-green-700 hover:bg-green-50'
                >
                  <ExternalLink className='mr-2 h-4 w-4' />
                  View Constitution
                </Button>
              </CardContent>
            </Card>

            <Card className='hover:shadow-lg transition-all duration-300 border-green-200 hover:border-green-300 bg-white/80 backdrop-blur-sm'>
              <CardHeader>
                <CardTitle className='flex items-center text-green-900'>
                  <div className='bg-green-100 p-2 rounded-full mr-3'>
                    <Award className='h-6 w-6 text-green-600' />
                  </div>
                  Bylaws
                </CardTitle>
                <CardDescription className='text-green-700'>
                  Detailed guidelines that help our community flourish and grow
                  sustainably
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant='outline'
                  className='w-full border-green-300 text-green-700 hover:bg-green-50'
                >
                  <ExternalLink className='mr-2 h-4 w-4' />
                  View Bylaws
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id='contact'
        className='bg-gradient-to-br from-green-800 to-emerald-900 text-white py-12 relative overflow-hidden'
      >
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-10 left-10'>
            <Leaf className='h-32 w-32 transform rotate-12' />
          </div>
          <div className='absolute bottom-10 right-10'>
            <TreePine className='h-40 w-40 transform -rotate-12' />
          </div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Trees className='h-48 w-48 opacity-50' />
          </div>
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-4 gap-8'>
            <div className='md:col-span-2'>
              <div className='flex items-center mb-4'>
                <div className='relative'>
                  <Leaf className='h-8 w-8 text-green-300' />
                  <div className='absolute -top-1 -right-1 text-xs'>🐍</div>
                </div>
                <span className='ml-3 text-xl font-bold'>AWS Cloud Club</span>
              </div>
              <p className='text-green-100 mb-4'>
                {`University of Cabuyao's thriving ecosystem for cloud computing
                growth, where every student can flourish alongside Hebi 🐍 in
                their AWS journey.`}
              </p>
              <div className='flex space-x-4'>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-green-200 hover:text-white hover:bg-green-700'
                >
                  <Github className='h-5 w-5' />
                </Button>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-green-200 hover:text-white hover:bg-green-700'
                >
                  <Linkedin className='h-5 w-5' />
                </Button>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-green-200 hover:text-white hover:bg-green-700'
                >
                  <Twitter className='h-5 w-5' />
                </Button>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-4 text-green-200'>
                Growth Paths
              </h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='#events'
                    className='text-green-300 hover:text-white transition-colors'
                  >
                    Events & Workshops
                  </Link>
                </li>
                <li>
                  <Link
                    href='#workshops'
                    className='text-green-300 hover:text-white transition-colors'
                  >
                    Learning Sessions
                  </Link>
                </li>
                <li>
                  <Link
                    href='#industry'
                    className='text-green-300 hover:text-white transition-colors'
                  >
                    Industry Network
                  </Link>
                </li>
                <li>
                  <Link
                    href='#constitution'
                    className='text-green-300 hover:text-white transition-colors'
                  >
                    Our Foundation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-4 text-green-200'>
                Connect & Grow
              </h3>
              <div className='space-y-2'>
                <div className='flex items-center text-green-300'>
                  <Mail className='h-4 w-4 mr-2' />
                  <span className='text-sm'>awsclub@uc.edu.ph</span>
                </div>
                <div className='flex items-center text-green-300'>
                  <Phone className='h-4 w-4 mr-2' />
                  <span className='text-sm'>+63 123 456 7890</span>
                </div>
                <div className='flex items-center text-green-300'>
                  <MapPin className='h-4 w-4 mr-2' />
                  <span className='text-sm'>University of Cabuyao, Laguna</span>
                </div>
              </div>
            </div>
          </div>

          <div className='border-t border-green-700 mt-8 pt-8 text-center'>
            <p className='text-green-300'>
              &copy; {new Date().getFullYear()} AWS Cloud Club - University of
              Cabuyao. Growing together, reaching new heights. 🌱
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
