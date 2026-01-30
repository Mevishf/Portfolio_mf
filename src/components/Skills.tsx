import FadeIn from './FadeIn';
import FlowingMenu from './FlowingMenu';

const skillItems = [
  {
    link: '#',
    text: 'Programming Languages',
    images: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
    ]
  },
  {
    link: '#',
    text: 'Web Technologies',
    images: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
    ]
  },
  {
    link: '#',
    text: 'DevOps',
    images: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg'
    ]
  },
  {
    link: '#',
    text: 'Developer Tools',
    images: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
    ]
  },
  {
    link: '#',
    text: 'Technologies',
    images: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg'
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-display font-medium text-[#16253E] mb-6">
              Supporting Characters
            </h2>
            <div className="w-24 h-1 bg-[#16253E] mx-auto mt-6"></div>
          </div>
        </FadeIn>

        <div className="bg-white rounded-[3rem] border-4 border-[#16253E] overflow-hidden" style={{ height: '600px', position: 'relative' }}>
          <FlowingMenu
            items={skillItems}
            speed={15}
            textColor="#16253E"
            bgColor="transparent"
            marqueeBgColor="#FFE6EA"
            marqueeTextColor="#16253E"
            borderColor="#16253E"
          />
        </div>
      </div>
    </section>
  );
}
