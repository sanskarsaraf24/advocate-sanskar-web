import { Award, Scale, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Scale, label: "Years of Experience", value: "10+" },
    { icon: Users, label: "Cases Handled", value: "500+" },
    { icon: Award, label: "Success Rate", value: "95%" },
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About the Practice
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With extensive experience in commercial litigation and dispute resolution, 
            I provide comprehensive legal services focused on protecting your interests 
            and achieving favorable outcomes. My practice is built on a foundation of 
            integrity, expertise, and personalized attention to each client's unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card p-8 rounded-lg text-center space-y-4 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center">
                <stat.icon className="h-10 w-10 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
