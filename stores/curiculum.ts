export const useCVStore = defineStore('cvStore', {
    state: () => ({
        show_by_dates: false,
        show_visit_card: false,
        experiences: [
         {
             id: 1,
             icon: '/img/pagesjaunes.svg',
             iconAlt: 'Pages Jaunes',
             color: 'yellow',
             title: 'Lead Developer fullstack',
             estab: 'Pages Jaunes',
             year: 2023,
             tag: ['xp'],
             start_date: 'Mars 2023',
             end_date: 'En poste',
             description: `
             Membre de l'équipe Search chez Pages Jaunes, je contribue à l'amélioration de l'interprétation des requêtes utilisateurs. Je travaille sur la pertinence et la performance des applications de recherche, intégrant l'IA générative pour de nouvelles innovations. J'ai mis en œuvre la recherche par besoin et l'analyse sémantique des avis utilisateurs. Mon environnement technique inclut Java, JavaScript, Python, MongoDB, ArangoDB, ElasticSearch, SpringBoot, VueJs, et des outils CI/CD comme Gitlab, Sonar, Prometheus, Canary, et Kubernetes. Mon rôle répond à des enjeux métier complexes dans un écosystème technique riche.
             `,
         },
         {
             id: 2,
             icon: '/img/capgemini.svg',
             iconAlt: 'Capgemini',
             color: 'blue',
             title: 'Lead Developer Java',
             estab: 'Capgemini',
             year: 2018,
             tag: ['xp'],
             start_date: 'Septembre 2018',
             end_date: 'Mars 2023',
             description: `
             Analyste technique et cadrage des évolutions, je chiffre, réalise et supporte la livraison de nouvelles features. Je forme et fais monter en compétences les nouveaux arrivants. Projet en Safe-Agile avec Java (Spring, SpringBoot), migration vers une architecture micro-services via Jhipster. Environnements Linux, déploiement via Ansible et Liquibase, scripts Bash/Python. Utilisation de bases de données relationnelles (MySQL, MariaDB) et NoSQL (MongoDB). Environnement technique riche avec Java, JavaScript, Python, bases de données variées, et CI/CD (Gitlab, Sonar, Jenkins).
             `
         },
         {
             id: 3,
             icon: '/img/travaux.svg',
             iconAlt: 'Travaux',
             color: 'orange',
             title: 'Ingénieur d\'étude Génie Climatique Bâtiment',
             estab: 'Groupe FEE, Anvolia, Cofély Axima (Groupe Engie)',
             year: 2011,
             tag: ['xp'],
             start_date: 'Septembre 2011',
             end_date: 'Octobre 2017',
             description:`
             Poste polyvalent incluant la réalisation de devis pour marchés privés/publics, études d'exécution pour chauffage, ventilation, plomberie et sécurité incendie. Gestion des relations avec la maîtrise d'ouvrage et d’œuvre, consultation et négociation avec fournisseurs.
             `
         },
         {
             id: 4,
             icon: '/img/rocket-launch.svg',
             iconAlt: 'rocket-launch-outline',
             color: 'cyan',
             title: "Concepteur Developpeur Logiciel",
             estab: "ENI Ecole Informatique",
             year: 2017,
             tag: ['school'],
             start_date: "Février 2017",
             end_date: "Décembre 2017",
             description: `
            Formation axée sur le développement full-stack, la gestion de projet et la sécurité informatique. Compétences acquises : développement front-end et back-end, gestion de bases de données, utilisation de frameworks Java Spring, Angular et Base de données relationnelles. Projets pratiques et stages en entreprise pour une expérience professionnelle complète.
          `
         },
         {
             id: 5,
             icon: '/img/school.svg',
             iconAlt: 'school',
             color: 'purple',
             title: "Ingénieur Énergétique Industrielle",
             estab: "ENSI Poitiers",
             year: 2011,
             tag: ['school'],
             start_date: "Septembre 2008",
             end_date: "Septembre 2011",
             description: `
             La formation "Diplôme d'Ingénieur - Énergétique et Environnement, Parcours Énergétique Industrielle" de l'ENSIP à Poitiers prépare les étudiants à travailler dans la production, transformation et utilisation rationnelle de l'énergie. Le programme couvre des domaines variés tels que les turbomachines, l'énergie solaire, éolienne, et la gestion de projets énergétiques, avec une forte composante pratique et des stages intégrés.
             `
         },
         {
             id: 6,
             icon: '/img/school.svg',
             iconAlt: 'school',
             color: 'green',
             title: "Technicien Sciences et Génie des Matériaux",
             estab: "IUT de Nîmes",
             year: 2008,
             tag: ['school'],
             start_date: "Septembre 2006",
             end_date: "Septembre 2008",
             description: `
             Formation en Bachelor Universitaire de Technologie (BUT) en Science et Génie des Matériaux à l'IUT de Nîmes, comprenant trois parcours : Métiers du recyclage et de la valorisation des matériaux, Métiers de l’ingénierie des matériaux et des produits, et Métiers de la caractérisation et de l’expertise des matériaux. 
             `
         },
         {
             id: 7,
             is_section: true,
             title: "Formations",
             year: 9999,
             tag: ['school'],
         },
         {
             id: 8,
             is_section: true,
             title: "Expériences",
             year: 9999,
             tag: ['xp'],
         }
     ],
        skills: [
            {
                section: 'Langages',
                color: 'yellow',
                items: [
                    {name: 'Java', rating: 4, icon: '/img/java.svg', color: 'blue'},
                    {name: 'Python', rating: 3.5, icon: '/img/python.svg', color: 'blue'},
                    {name: 'Javascript', rating: 3, icon: '/img/javascript.svg', color: 'yellow'},
                    {name: 'Shell', rating: 3 , icon: '/img/bash.svg', color: 'cyan'},
                ]
            },
            {
                section: 'Framework',
                color: 'blue',
                items: [
                    {name: 'SpringBoot', rating: 4, icon: '/img/spring-boot.svg', color: 'orange'},
                    {name: 'VueJs', rating: 3.5, icon: '/img/vuejs.svg', color: 'yellow'},
                    {name: 'Angular', rating: 2, icon: '/img/angular.svg', color: 'yellow'},
                ]
            },
            {
                section: 'DevOps',
                color: 'orange',
                items: [
                    {name: 'Docker', rating: 4, icon: '/img/docker.svg', color: 'blue'},
                    {name: 'GitLab', rating: 4, icon: '/img/gitlab.svg', color: 'pink'},
                    {name: 'Jenkins', rating: 3.5, icon: '/img/jenkins.svg', color: 'yellow'},
                    {name: 'Ansible', rating: 3, icon: '/img/ansible.svg', color: 'orange'},
                ]
            },
            {
                section: 'Gestion de projet',
                color: 'cyan',
                items: [
                    {name: 'Jira', rating: 4, icon: '/img/jira.svg', color: 'orange'},
                    {name: 'Confluence', rating: 4, icon: '/img/confluence.svg', color: 'yellow'},
                    {name: 'Polarion', rating: 3, icon: '/img/polarion.svg', color: 'yellow'},
                ]
            }
        ],
        open_skill_panel: ["Langages","Framework"],
        theme: 'dark',
    }),
    getters: {
        getXP: (state) => {
            return state.experiences.filter(x => x.tag.includes('xp')).sort((a, b) => b.year - a.year);
        },
        getSchool: (state) => {
            return state.experiences.filter(x => x.tag.includes('school')).sort((a, b) => b.year - a.year);
        },
        getSkills: (state) => {
            return state.skills;
        },
        getSkillSectionColor: (state) => (section: string) => {
            return state.skills.find(x => x.section === section)?.color || 'black';
        },
        getSkillsBySection: (state) => (section: string) => {
            return state.skills.find(x => x.section === section)?.items || [];
        }
    },
    actions: {
        getItemOrganizedBy(is_section: boolean) {
            let result = [];
            if (is_section) {
                result.push(this.experiences.filter(x => !x.is_section).sort((a, b) => b.year - a.year));
            } else {
                result.push(this.getXP);
                result.push(this.getSchool);
            }
            return result.flat();
        },
        toggleShowVisitCard(event: boolean) {
            this.show_visit_card = event;
        },
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', this.theme);
        }
    },
});