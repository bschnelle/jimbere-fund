import React, { PropTypes } from 'react';
import Container from '../Container/Container';
import WorkPriorityPanes from '../WorkPriorityPanes/WorkPriorityPanes';
import classes from './Work.scss';

const priorities = [
  {
    title: 'Tackling Food Insecurity',
    image: '/images/work_food.svg',
    imageAlt: 'fork and knife icon',
    content: (
      <div>
        <div>
          <h5>The Problem</h5>
          <p>
            The Democratic Republic of Congo is endowed with some of the world’s most fertile
            land. Yet, it still suffers recurrent episodes of food shortages. Three-quarters
            of Congo’s workforce is into the agricultural sector, yet 64% of them are food
            insecure. Incessant conflicts and the presence of a kaleidoscope of militias have
            worsened the situation. There are an estimated 6.7 million people who go to bed
            hungry every day in Congo, with markedly high levels of food insecurity in Eastern
            parts of the country where our work focuses.
          </p>
        </div>
        <div>
          <h5>The Solution</h5>
          <p>
            We work with local communities and subsistence farmers to raise agricultural
            productivity through use of improved seeds and modern tools so that communities
            can produce more food, store their produce safely and feed their families in a
            sustainable way. Communities in remote areas in Congo are disconnected from urban
            areas, which means that there is lack of information of ways to do better what
            they do. We mobilize communities and share best practices of established modern
            methods of producing more food on less land, and provide resources that allow
            them to produce more food.
          </p>
          <p>
            Many communities in Congo have livestock such as cows, goats, sheep and hens.
            Animal husbandry has the potential to provide nutritious food to the population,
            given that half of Congo’s children under five are stunted. Yet it remains
            underdeveloped. We work with local communities to develop and increase livestock
            production. Animal productivity (mainly cows) is very low largely due to genetic
            make-up, while it’s higher in neighboring countries. Producing and consuming more
            dairy products, for example, is an effective way of fighting malnutrition. We
            support communities to adopt breed that produce more milk and provide enough
            nutritious elements needed for healthier communities.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Access to Healthcare, Clean Water, and Sanitation',
    image: '/images/work_water.svg',
    imageAlt: 'fork and knife icon',
    content: (
      <div>
        <div>
          <h5>The Problem</h5>
          <p>
            The healthcare system in rural Congo is either broken or non-existent. The same
            is true for cities, but it’s more pronounced in rural areas. Entire communities
            live without any kind of access to a healthcare facility. When there is a
            healthcare facility, it often requires patients to walk long distances or be
            transported by other people on rudimentary wooden tools. Infectious diseases
            like tuberculosis spread this way because people don’t know the disease
            and/or are unaware of disease transmission mechanisms.
          </p>
          <p>
            Only 29% of people in Congo have access to improved sanitation access and 75%
            lack access to safe drinking water. This lack of water and sanitation leads to
            diseases such as diarrhea, which is responsible for 14% of deaths of children
            under five, and cholera, which kills over 20,000 people in Congo every year
            (with higher incidences reported in South Kivu, North Kivu and Katanga).
            Furthermore, too many people in rural areas still practice open defecation.
          </p>
        </div>
        <div>
          <h5>The Solution</h5>
          <p>
            It’s hard and ineffective to build a hospital near every rural community.
            Most of these communities are scattered over large areas of land. South Kivu,
            one of Congo’s Eastern provinces where we have operations, is larger in size
            than Rwanda and Burundi combined. We’re tackling this immense challenge in two
            ways. First, we’re working to strengthen existing hospitals and increase their
            capacity to deal with prevalent diseases in their areas. This means working
            with communities to expand community hospital services and making basic
            medicines available. We promote health education to more people and provide
            training to healthcare workers. Second, together with communities and existing
            healthcare community centers, we’re working to introduce innovative healthcare
            delivery systems to rural communities, including telehealth via mobile telephones
            which are just making inroads in many of these rural communities and mobile
            clinics where no existing community health centers exist.
          </p>
          <p>
            On water and sanitation, we work with communities to bring safe drinking water
            to communities. In the high plateaus of Itombwe in South Kivu, for instance,
            women walk long distances to fetch water and proceed to use it without purifying
            it. This is dangerous because other people who live upstream might have used it
            doing laundry or taking a shower. All of this creates poor health. We are also
            promoting the use of latrines because open defecation is a major public health
            issue and spreads waterborne diseases. We do this by educating communities
            about the dangers of open defecation and sharing best practices on simple ways
            to build pit latrines which significantly improve sanitation.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Access to Quality Education',
    image: '/images/work_educate.svg',
    imageAlt: 'book icon',
    content: (
      <div>
        <div>
          <h5>The Problem</h5>
          <p>
            The D.R Congo’s education system faces multiple challenges. First, the country
            is among those with the largest number of primary school age children who are
            out of school, about 3.5 million of them. Drop-out rate is high due to tuition
            as parents have to cover teachers’ remuneration and other operating expenses.
            Second, the quality of education for children in school is low due to a
            combination of factors, including overcrowding and teachers’ qualifications.
            Third, most schools in rural areas lack basic didactic materials and equipment
            to dispense quality education. Some schools still operate with no roof over
            children’s heads - out in the shades of trees. Teachers sometimes rely on old,
            hand-written notebooks passed down from generation to generation as the only
            guiding materials for teaching. This is not an education system of the 21st
            century for future scientists and innovators.
          </p>
        </div>
        <div>
          <h5>The Solution</h5>
          <p>
            We work with local communities to rebuild and rehabilitate classrooms so that
            children can learn in decent conditions. In South Kivu, the lack of classrooms
            is acute in Mwenga, Fizi and Shabunda territories. We work with local communities
            and government authorities to rehabilitate dilapidated schools.  We work with
            schools and support them to provide professional trainings for teachers and
            support them to acquire updated materials to guide their teaching. There can’t
            be quality education if teachers aren’t trained and/or lack teaching materials.
            We work with schools and communities to secure equipment such as computers and
            books for schools. Our primary goal is to raise the quality of education children
            receive while at the same time reducing the number of children out of school.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Promoting Women\'s Empowerment',
    image: '/images/work_empowerment.svg',
    imageAlt: 'female symbol icon',
    content: (
      <div>
        <div>
          <h5>The Problem</h5>
          <p>
            Women in Congo drive the economy, especially in rural areas. They do much of the
            work of cultivating the land to feed their families. They gather firewood, a task
            increasingly difficult as weather patterns change. They haul jerry cans of water
            on their heads from streams nearby. And they take care of the children. Yet, their
            rights are still limited compared to men’s. In some local cultures, women can’t
            own property. In others, they have no right to inheritance.  Child marriage whereby
            families decide to marry off their daughters are still too common. In Rural Congo,
            it’s estimated that 74% of girls between the ages of 15 and 19 are married.
          </p>
        </div>
        <div>
          <h5>The Solution</h5>
          <p>
            We work with local communities to change perceptions of women in society through
            investing in women-led projects, and by involving women in leadership positions
            in all our projects. The issue of inequality is ingrained in cultures and thus a
            thorny one to fix. We understand that it’s rather a slow process and are willing
            to put in efforts today that will bear fruits in decades to come. We bring
            communities together to discuss the issues of inequality such as owning property
            and extending the right of inheritance to everyone. We enlist community leaders,
            especially men, to be ambassadors for gender equality. We believe that men must
            be brought on board for change to happen. To end child marriage, we promote girls’
            education and rally the support of parents and community members. In parts of
            rural Congo, it is not uncommon for families to send their sons to school while
            their daughters stay home to take care of household chores. Sometimes parents
            see economic incentives to marry off their daughters. We know that in the long-run,
            it is neither in the best interests of parents nor of their communities to
            discriminate children based on their gender.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Access to Electricity',
    image: '/images/work_electricity.svg',
    imageAlt: 'light bulb icon',
    content: (
      <div>
        <div>
          <h5>The Problem</h5>
          <p>
            83.6% of people in Congo don’t have access to electricity. Most of them rely on
            kerosene at best, wood or charcoal at worst, for lighting. This mode of lighting
            causes indoor air pollution and chronic respiratory and lung diseases. According
            to the World Health Organization, Congo is among 10 countries most affected by
            indoor air pollution, with more than 1.5 million deaths resulting from indoor air
            pollution.  In addition, Children from households without access to electricity
            won’t have access to quality education. Insufficient access to sources of lighting
            impairs reading and will, in return, hurt the future potential and productivity
            of these young minds.
          </p>
        </div>
        <div>
          <h5>The Solution</h5>
          <p>
            We work in some of the most remote corners of the world. Communities there are
            scattered over large areas of land. Bringing the traditional grid to these remote
            areas is too expensive and close to impossible to achieve for cash-strapped local
            governments. We work with communities to adopt healthier mode of lighting. We
            focus on small-scale, distributed solar systems. Though this is not a solution
            for the amount of electricity needed for large-scale industrial production, it
            does an enormous good to the health and wellbeing of small communities. With
            recent trends in reduction of the costs of solar panels, this mode of lighting
            is increasingly becoming the best option for remote, isolated areas. We focus on
            getting home solar systems in schools to enable them to acquire and use modern
            teaching materials. We work with communities to adopt solar systems in their
            households, though the costs are still out of reach for most people in rural
            Congo:  A basic home solar system costs about 300$-400$ (including a solar
            panel, a battery, a charge controller, LED lights, and charging outlets)
          </p>
          <p>
            Lack of electricity also means that everyday tasks are much more time-consuming
            as powered labor-saving devices are not applicable. We work with communities to
            introduce common electric powered devices that reduce the work burden for people,
            especially women. For instance, women toil for weeks to pound maize into flour
            used for Ugali, the staple food in Congo. With a milling machine, a group of
            villages in the same area could reduce the intense physical task and save
            women time for other things.
          </p>
        </div>
      </div>
    )
  }
];

const Work = (props) => (
  <div>
    <Container className={classes.work} title="Work">
      <h6>
        Jimbere Fund works closely with communities and villages in remote areas of
        Democratic Republic of Congo to design and implement individualized high-impact
        social interventions. Communities identify their most pressing needs in agriculture,
        education, health, women’s empowerment, water and sanitation, and we work with them
        to find solutions.
      </h6>
    </Container>

    <Container className={classes.why} section title="Why?">
      <p>
        About 64% of Democratic Republic of Congo’s nearly 80 million inhabitants live below
        poverty line. Over 60% of them live in rural areas as subsistence farmers.  This
        unprecedented level of extreme poverty is amplified by tribal strife and incessant
        conflicts. We provide communities with tools and resources to improve their lives.
        Our approach is different: it’s truly locally-led. We source ideas of interventions
        from local communities and work with them to design and implement holistic and
        self-sustaining projects.
      </p>
    </Container>

    <Container className={classes.difference} section title="Difference">
      <p>
        We go where others dare not go. Other nonprofits and relief organizations go up to
        where the last dirt road ends. We go beyond that. We reach out to some of the world’s
        most remote communities where social needs are most acute. It sometimes takes us a
        couple of days of hiking to get there. We firmly believe that solutions to issues of
        extreme poverty and inequality lie within people and communities living in it. We
        co-design and co-manage projects together with the communities we serve.
      </p>
      <p>
        Although our projects are informed by the communities we serve, the issues we hear
        across remote communities in Congo are the same. We ensure each community we
        serve has an opportunity to participate in designing the particularities of their
        project and drive the implementation. Here are the top issues we’re trying to fix,
        one community at a time.
      </p>
    </Container>


    <h1 className={classes.priorityHeader}>Priority Areas</h1>
    <WorkPriorityPanes compact={props.isMedium} panes={priorities} />
  </div>
);

Work.propTypes = {
  isMedium: PropTypes.bool.isRequired
};

export default Work;
