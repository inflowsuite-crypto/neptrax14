import React from 'react';
import {
  Globe,
  User,
  Search,
  TrendingUp,
  Megaphone,
  Briefcase,
  Zap,
  Beaker,
  Archive,
  PackageCheck,
  Focus,
  MessagesSquare,
  ClipboardList,
  ArrowRight,
  Star,
  CheckCircle,
} from 'lucide-react';

import ScrollReveal from './ScrollReveal';

export default function MissionSection() {
  const features = [
    {
      icon: Briefcase,
      title: 'Business Website',
      description: 'Professional, easy-to-navigate websites that clearly showcase your offerings and drive customer action.',
      image: '/design/business.png',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: User,
      title: 'Personal Portfolio',
      description: 'Stunning portfolios that capture your unique style and build an unforgettable personal brand.',
      image: '/design/personal.png',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Search,
      title: 'On-Page SEO',
      description: 'Comprehensive optimization to rank higher on Google and attract the right customers consistently.',
      image: '/design/seo.png',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: TrendingUp,
      title: 'SEO Audit & Strategy',
      description: 'Deep-dive analysis with actionable roadmaps to dominate your niche and drive sustainable growth.',
      image: '/design/seo2.png',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Megaphone,
      title: 'Marketing Website',
      description: 'High-converting landing pages and sales funnels focused on turning viewers into customers.',
      image: '/portfolio/sono.png',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Globe,
      title: 'Brand Endorsement',
      description: 'Authentic digital presence that builds genuine connections and turns visitors into loyal believers.',
      image: '/portfolio/sweeten.png',
      gradient: 'from-amber-500 to-yellow-500',
    },
  ];

  const benefits = [
    {
      title: 'Local Expertise',
      description: 'Leverage our deep, country-wide expertise to drive growth across the United States.',
      icon: CheckCircle,
    },
    {
      title: 'Proven Results',
      description: 'Measurable success in digital traffic, qualified leads, and revenue growth.',
      icon: Star,
    },
    {
      title: 'Tailored Strategies',
      description: 'Custom digital strategy designed to solve your unique business challenges.',
      icon: Focus,
    },
    {
      title: 'Dedicated Partnership',
      description: 'Transparent communication keeping you informed and in control every step.',
      icon: MessagesSquare,
    },
    {
      title: 'Smart Investment',
      description: 'Outstanding digital quality and results without stretching your budget.',
      icon: Zap,
    },
    {
      title: 'Digital Transformation',
      description: 'Integrated solutions from web development to social media management.',
      icon: Globe,
    },
  ];

  const stats = [
    { value: '97%', label: 'Client Retention' },
    { value: '100+', label: 'Projects Delivered' },
    { value: '24/7', label: 'Support' },
    { value: '99%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <ScrollReveal direction="left" delay={0}>
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
                <img
                  src="public/home.jpeg"
                  alt="Jeton Project"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                    <h3 className="text-white font-semibold text-lg mb-2">PixelReach Studios</h3>
                    <p className="text-gray-300 text-sm">Complete brand transformation</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                  We Design Experiences That Feel{' '}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Natural
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Smarter interfaces, smoother journeys, and clear results that prove their worth from the first click.
                </p>
              </div>

              {/* Testimonial Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-start mb-4">
                  <div className="flex-1">
                    <p className="text-white text-lg italic mb-4">
                      "Neptrax delivered beyond expectations. The website feels modern, fast, and truly professional in every way. It changed how clients see our brand."
                    </p>
                    <p className="text-gray-400">— Oliver Hayes, CEO at PixelReach Studios</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center ml-4">
                    <Star className="text-white" size={20} />
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <ScrollReveal key={index} direction="zoom" delay={300 + index * 100}>
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-6">
              Streamline Your Digital Presence
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Take full control of your digital ecosystem. Simplify content management, collaborate with clarity, and accelerate your business with intuitive workflows.
            </p>
          </div>
        </ScrollReveal>

        {/* Square Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div className="group relative">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-500 h-full flex flex-col aspect-square">
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <feature.icon className="text-white" size={28} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 flex-1">
                      {feature.description}
                    </p>

                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden border border-gray-600 group-hover:border-gray-500 transition-all duration-300">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-700">
                      <span className="text-gray-400 text-sm">Learn more</span>
                      <ArrowRight className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Features Grid */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Beaker, title: 'Project Mapping', description: 'Break down complex projects into clear, actionable tasks for seamless workflow.' },
              { icon: Archive, title: 'Progress Tracking', description: 'Automatically track completed milestones maintaining a focused workspace.' },
              { icon: PackageCheck, title: 'Ready for Deployment', description: 'Receive final deliverables that are ready for instant implementation.' },
              { icon: Focus, title: 'Project Lens', description: 'Customize your view to highlight priorities and filter irrelevant information.' },
              { icon: MessagesSquare, title: 'Team Dialogue', description: 'Embed discussions within specific tasks to enhance collaboration.' },
              { icon: ClipboardList, title: 'Faster Delivery', description: 'Use structured templates to accelerate delivery while maintaining standards.' },
            ].map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                    <item.icon className="text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <ScrollReveal direction="up" delay={0}>
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">Why Choose Neptrax?</h2>
              <p className="text-gray-300 text-xl">World-Class Expertise. Fast & Professional Execution.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 80}>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 h-full group">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="text-blue-400" size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">{benefit.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Outcome Highlight */}
        <ScrollReveal direction="zoom" delay={0}>
          <div className="text-center py-24 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-6xl font-bold text-white mb-8">Enhanced Outcomes.</h2>
              <h3 className="text-4xl font-bold text-white mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Fast, Functional, Effective
              </h3>

              <div className="flex justify-center mb-12">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
                    <Zap className="text-white" size={48} />
                  </div>
                  <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-50"></div>
                </div>
              </div>

              <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
                From responsive design to solid SEO foundations, we elevate and streamline your entire online presence with cutting-edge solutions.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-24">
          <ScrollReveal direction="left" delay={0}>
            <div className="relative group">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20">
                <img 
                  src="public/about.png" 
                  alt="About Neptrax" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-white mb-6">About Neptrax</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                From coast to coast, we create websites, grow your rankings, and take social media off your plate. Our services won't drain your budget, our support team is always there, and yes—we actually reply.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you're beginning or leveling up, Neptrax helps you get it done smoothly and simply with cutting-edge solutions tailored to your unique needs.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: 'Web Development', value: '100%' },
                  { label: 'SEO Optimization', value: '24/7' },
                  { label: 'Client Support', value: '99%' },
                  { label: 'Project Success', value: '100+' },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-2xl p-4 text-center">
                    <div className="text-blue-400 font-bold text-lg">{item.value}</div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}