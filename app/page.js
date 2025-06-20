import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Sparkles, Users, Clock, Shield, Star, Zap, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Pricing from "@/components/pricing"; 
import { creditBenefits, features, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section with Enhanced Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-950 via-background to-purple-950">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 px-4 py-2 rounded-full border border-indigo-700/30 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-indigo-400 animate-pulse" />
                <span className="text-indigo-400 text-sm font-medium">Transform Your Learning Journey</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Connect with Expert <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
                  Mentors
                </span>
              </h1>
              <p className="text-muted-foreground text-xl max-w-lg leading-relaxed">
                Experience personalized mentorship through video consultations, 
                structured learning paths, and continuous support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-400 via-pink-400 via-sky-400 to-violet-400 text-white shadow-lg hover:from-orange-500 hover:via-pink-500 hover:via-sky-500 hover:to-violet-500 transition-all duration-300"
                >
                  <Link href="/onboarding">
                    Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-indigo-700/30 hover:bg-indigo-900/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <Link href="/doctors">Explore Mentors</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2 bg-indigo-900/20 px-4 py-2 rounded-full">
                  <Users className="h-5 w-5 text-indigo-400" />
                  <span className="text-muted-foreground">10k+ Active Students  </span>
                </div>
                <div className="flex items-center space-x-2 bg-indigo-900/20 px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-indigo-400" />
                  <span className="text-muted-foreground">Verified Mentors</span>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group">
  {/* Hover gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

  {/* Image */}
  <Image
    src="/banner5.jpg"
    alt="Mentor consultation"
    fill
    priority
    className="transition-transform duration-500 transform group-hover:scale-105 rounded-2xl object-contain sm:object-cover object-center z-0"
  />

  {/* Top gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent z-20" />
</div>

          </div>
        </div>
      </section>

      {/* Features Section with Enhanced Cards */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-indigo-950/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border-indigo-700/30 px-4 py-1 text-indigo-400 text-sm font-medium mb-4 backdrop-blur-sm"
            >
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Learning <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
                Experience
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with expert mentorship
              to deliver an unparalleled learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group bg-gradient-to-br from-blue-200/20 via-purple-900/20 to-pink-300/20 border border-indigo-800/20 hover:border-pink-200/40 transform transition-all duration-200 hover:scale-[1.03] hover:shadow-yellow-200/20 hover:shadow-3xl rounded-2xl backdrop-blur-sm"
              >
                <CardHeader className="pb-2">
                  <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-4 rounded-xl w-fit mb-4 transition-colors duration-300 group-hover:from-indigo-800/40 group-hover:to-purple-800/40">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl font-semibold text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - New Addition */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-500/20 p-8 rounded-2xl border border-indigo-800/20 backdrop-blur-sm ">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-900/30 p-3 rounded-xl">
                  <Star className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">98%</h3>
                  <p className="text-muted-foreground">Success Rate</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-500/20 p-8 rounded-2xl border border-indigo-800/20 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-900/30 p-3 rounded-xl">
                  <Zap className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">24/7</h3>
                  <p className="text-muted-foreground">Support Available</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-500/20 p-8 rounded-2xl border border-indigo-800/20 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-900/30 p-3 rounded-xl">
                  <Target className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">500+</h3>
                  <p className="text-muted-foreground">Expert Mentors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section with Enhanced Design */}
      <section id="pricing" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border-indigo-700/30 px-4 py-1 text-indigo-400 text-sm font-medium mb-4 backdrop-blur-sm"
            >
              Flexible Plans
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
                Learning Path
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select the perfect plan that aligns with your educational goals
              and budget
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <Pricing />

            <Card className="mt-16 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-indigo-900/20 border border-indigo-800/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-white flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-indigo-400" />
                  How Our Credit System Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {creditBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-4 mt-1 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-1.5 rounded-full">
                        <svg
                          className="h-4 w-4 text-indigo-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <p
                        className="text-muted-foreground text-base"
                        dangerouslySetInnerHTML={{ __html: benefit }}
                      />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Enhanced Cards */}
      <section className="py-32 relative bg-gradient-to-br from-indigo-950/50 via-purple-950/50 to-indigo-950/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border-indigo-700/30 px-4 py-1 text-indigo-400 text-sm font-medium mb-4 backdrop-blur-sm"
            >
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Community <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
                Says
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join thousands of satisfied students who have transformed their
              learning journey with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-indigo-900/20 border border-indigo-800/20 hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-indigo-900/30 border border-indigo-800/20 backdrop-blur-sm">
            <CardContent className="p-12 md:p-16 lg:p-20 relative overflow-hidden">
              <div className="max-w-3xl relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Ready to Transform Your <br />
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
                    Learning Journey?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                  Join our community of learners and mentors. Experience personalized
                  guidance, structured learning paths, and continuous support.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 text-lg px-8 py-6 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
                  >
                    <Link href="/sign-up">Get Started Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-indigo-700/30 hover:bg-indigo-900/30 transition-all duration-300 text-lg px-8 py-6 backdrop-blur-sm"
                  >
                    <Link href="#pricing">View Plans</Link>
                  </Button>
                </div>
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-indigo-800/10 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse"></div>
              <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-purple-700/10 rounded-full blur-3xl -ml-10 -mb-10 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
