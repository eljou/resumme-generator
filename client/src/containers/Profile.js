import React, { Component } from 'react'
import GeneralSection from '../components/sections/GeneralSection'
import ProfileHeader from '../components/sections/header/ProfileHeader'
import Summary from '../components/sections/summary/Summary'
import WorkExperience from '../components/sections/work_experience/WorkExperience'
import Education from '../components/sections/education/Education'
import Languages from '../components/sections/languages/Languages';
import Skills from '../components/sections/skills/Skills';

import './Profile.css'
import Hobbies from '../components/sections/hobbies/Hobbies';
import SocialNetworks from '../components/sections/social_networks/SocialNetworks';

export default class Profile extends Component {
    state = {
        basicInformation: {
            firstName: 'Jhon Doe', 
            profesionalTitle: 'UI Developer', 
            email: 'test@testing.com',
            phone: '(569)-8281-4455',
            livesIn: 'Santiago de Chile'
        },
        summaryInformation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga ipsum deserunt in sint saepe corporis ad tempora illo nobis praesentium minima ipsam, vitae neque soluta pariatur, quibusdam officiis dolorem!',
        workExperience: [
            {
                workPlace: 'Facebook INC',
                workTitle: 'UI Developer',
                dateIn: '11/01/2012',
                dateOut: '11/05/2014',
                workDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga ipsum deserunt in sint saepe corporis ad tempora illo nobis praesentium minima ipsam, vitae neque soluta pariatur, quibusdam officiis dolorem!'
            },
            {
                workPlace: 'ETECSA',
                workTitle: 'Fullstack Developer',
                dateIn: '11/01/2011',
                dateOut: '10/01/2012',
                workDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga ipsum deserunt in sint saepe corporis ad tempora illo nobis praesentium minima ipsam, vitae neque soluta pariatur, quibusdam officiis dolorem!'
            }
        ],
        education: [
            {
                schoolName: 'UCI / University of Informatics Science',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga ipsum deserunt in sint saepe corporis ad tempora illo nobis praesentium.',
                date: '11/01/2011'
            },
            {
                schoolName: 'IPVCE / Sciences Exacts Pre Universitary',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga ipsum deserunt in sint saepe corporis ad tempora illo nobis praesentium.',
                date: '11/01/2011'
            }
        ],
        socialNetworks: [
            // {icon: 'facebook-f', link: 'http://www.facebook.com/user'},
            {icon: 'linkedin-in', link: 'http://www.linkedin.com/user'},
            {icon: 'twitter', link: 'http://www.twitter.com/user'},
            {icon: 'github', link: 'http://www.github.org/user'},
            // {icon: 'instagram', link: 'http://www.instagram.com/user'},
            {icon: 'globe', link: 'http://www.personal.site.com'},
        ],
        languages: [{
            lang: 'Spanish',
            level: 10
        },{ 
            lang: 'English',
            level: 8
        }],
        skillSet: [
            {
                category: 'Core Languages',
                skills: [
                    {skillType: 'JavaScript', level: 9}, 
                    {skillType: 'PHP', level: 7},
                    {skillType: 'Java', level: 7},
                    {skillType: 'C#', level: 6},
                    {skillType: 'C++', level: 6},
                    {skillType: 'Python', level: 4},
                ]
            },
            {
                category: 'Core UI',
                skills: [
                    {skillType: 'JS(ES5)', level: 9}, 
                    {skillType: 'JS(ES6)', level: 9},
                    {skillType: 'CSS3', level: 8},
                    {skillType: 'HTML5', level: 10},
                ]
            },
            {
                category: 'UI Frameworks',
                skills: [
                    {skillType: 'BackboneJS', level: 7}, 
                    {skillType: 'ReactJS', level: 8},
                    {skillType: 'Angular', level: 4},
                    {skillType: 'VueJS', level: 6},
                ]
            },
            {
                category: 'Back End',
                skills: [
                    {skillType: 'Spring Framework', level: 5},
                    {skillType: 'MongoDB', level: 7},
                    {skillType: 'NodeJS', level: 8},
                ]
            }
        ],
        hobbies: [
            { icon: 'futbol', type: 'Football' },
            { icon: 'gamepad', type: 'Video Games' },
            { icon: 'paint-brush', type: 'Painting' }
        ]
    }

    render() {
        return (
            <div id="profile-wrapper" className="container">
                <div id="profile-main">
                    <div id="profile-card">
                        <ProfileHeader basicInformation={this.state.basicInformation} />
                    </div>
                    
                    <GeneralSection id="testId" sectionClass="summary" icon="user" headerCopy="Profile">
                        <Summary summaryInformation={this.state.summaryInformation} />
                    </GeneralSection>

                    <GeneralSection sectionClass="work-experience" icon="building" headerCopy="Work Experience">
                        <WorkExperience works={this.state.workExperience} />
                    </GeneralSection>

                    <GeneralSection sectionClass="education" icon="graduation-cap" headerCopy="Education">
                        <Education schools={this.state.education} />
                    </GeneralSection>
                </div>
                <div id="profile-aside">
                    <GeneralSection sectionClass="social-networks" icon="globe" headerCopy="Social Networks">
                        <SocialNetworks socialNetworks={this.state.socialNetworks} />
                    </GeneralSection>
                    <GeneralSection sectionClass="skills" icon="chart-bar" headerCopy="Skills">
                        <Skills skillSet={this.state.skillSet} />
                    </GeneralSection>
                    <GeneralSection sectionClass="languages" icon="language" headerCopy="Languages">
                        <Languages languages={this.state.languages} />
                    </GeneralSection>
                    <GeneralSection sectionClass="hobbies" icon="heart" headerCopy="Hobbies">
                        <Hobbies hobbies={this.state.hobbies} />
                    </GeneralSection>
                </div>
            </div>
        )
    }
}
