import React, { PropTypes } from 'react';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import WorkPriorityPanes from '../WorkPriorityPanes/WorkPriorityPanes';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import classes from './Work.scss';

/* priority items rendered by WorkPriorityPanes */
const priorities = [
  {
    title: 'Tackling Food Insecurity',
    image: '/images/work_food.svg',
    imageAlt: 'fork and knife icon',
    content: (
      <div>
        <div>
          <h5>An estimated 6.7 million people go to bed hungry every day in Congo</h5>
          <p>
            Despite being endowed with some of the world’s most fertile land, Congo still suffers
            recurrent episodes of food shortages. Three-quarters of Congo’s workforce is in the
            agricultural sector, yet 64% of them are food insecure due to lack of education and
            resources. Incessant conflicts and the presence of a kaleidoscope of militias have
            worsened the situation.
          </p>
          <h5>Modern approaches to farming and resources can fuel food production</h5>
          <p>
            We work with local communities and subsistence farmers to raise agricultural productivity
          ]by sharing modern methods of producing food. Through education and better resources,
          such as improved seeds and modern tools, communities are able to produce more food,
          store their produce safely and feed their families in a sustainable way.
          </p>
        </div>
        <div>
          <h5>Animal husbandry can enhance nutrition in the undernourished</h5>
          <p>
            Many communities in Congo also have livestock such as cows, goats, sheep and hens, yet
            animal husbandry remains underdeveloped. We work with local communities to develop and
            increase livestock production, especially those that produce milk. Producing and
            consuming more dairy products, for example, is an effective way of fighting malnutrition
            given that half of Congo’s children under five are stunted.
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
          <h5>Entire communities live without any kind of access to a healthcare facility</h5>
          <p>
            The healthcare system in rural Congo is either broken or non-existent. When there is
            a healthcare facility, it often requires patients to walk long distances or be
            transported by other people on rudimentary wooden tools. Infectious diseases like
            tuberculosis spread this way because people don’t know the disease and/or are
            unaware of disease transmission mechanisms.
          </p>
          <h5>Expanding hospital services and innovative healthcare delivery can make a difference</h5>
          <p>
            Building a hospital near every rural community is impossible. So we’re tackling
            this immense challenge in two ways:
            <ul>
              <li>
                We’re expanding existing hospital services by promoting health education to more people,
                providing training to healthcare workers, and making basic medicines available.
              </li>
              <li>
                We’re introducing innovative healthcare delivery systems to rural communities, including
                motorized tricycle ambulances to transport patients to medical facilities.
              </li>
            </ul>
          </p>
        </div>
        <div>
          <h5>Lack of clean water and living conditions result in poor health and death</h5>
          <p>
            Only 29% of people in Congo have access to improved sanitation and 75% lack access
            to safe drinking water. This lack of clean water and sanitation leads to diseases
            such as diarrhea, which is responsible for 14% of deaths of children under five,
            and cholera, which kills over 20,000 people in Congo every year (with higher
            incidences reported in South Kivu, North Kivu and Katanga). Furthermore, too
            many people in rural areas still practice open defecation.
          </p>
          <h5>Simple improvements can make a large-scale impact</h5>
          <p>
            We work with communities to bring safe drinking water to them. We are also promoting
            the use of latrines to stop open defecation, a major public health issue that spreads
            waterborne diseases. We do this by educating communities about the dangers of open
            defecation and sharing best practices on simple ways to build pit latrines, which
            significantly improve sanitation.
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
          <h5>3.5 million school-aged children are not in school</h5>
          <p>
            D.R. Congo is among those countries with the highest number of children who are
            not in school. The dropout rate is high due to parents’ inability to cover tuition
            for teachers’ remuneration and other operating expenses. Quality of education is
            low due to overcrowding and under-qualified teachers. Lack of essential educational
            tools and equipment limit effective education. Teachers sometimes rely on old,
            hand-written notebooks passed down from generation to generation as the only
            guiding materials for teaching.
          </p>
        </div>
        <div>
          <h5>Better education can help build healthier futures</h5>
          <p>
            Our primary goal is to raise the quality of education children receive while reducing
            the number of children out of school. We partner with communities and governments to:
            <ul>
              <li>
                Rebuild and rehabilitate schools and classrooms so that children can learn in suitable conditions.
              </li>
              <li>
                Provide professional training for teachers and support their acquisition of updated teaching materials.
              </li>
              <li>
                Secure necessary equipment such as computers and books for schools.
              </li>
            </ul>
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
          <h5>Women are still vastly under-valued</h5>
          <p>
            Women in Congo drive the economy, especially in rural areas:
            <ul>
              <li>
                They do much of the work of cultivating the land to feed their families.
              </li>
              <li>
                They gather firewood, a task increasingly difficult as weather patterns change.
              </li>
              <li>
                They haul jerry cans of water on their heads from streams.
              </li>
              <li>
                They take care of the children.
              </li>
            </ul>
          </p>
          <p>
            Yet, their rights are still limited compared to men’s. In some local cultures, women can’t
            own property. In others, they have no right to inheritance.  Childhood marriage is still
            too common. In rural Congo, it’s estimated that 74% of girls between the ages of
            15 and 19 are married.
          </p>
        </div>
        <div>
          <h5>We believe that men must be brought on board for change to happen</h5>
          <p>
            The issue of inequality is ingrained in cultures and thus a thorny one to fix. We understand that
            it’s rather a slow process and are willing to put in efforts today that will bear fruits in
            decades to come. That’s why we invest in women-led projects, and involve women in
            leadership positions in our work.
          </p>
          <p>
            We also bring communities together to discuss the issues of inequality such as owning property
            and extending the right of inheritance to everyone. We enlist community leaders, especially
            men, to be ambassadors for gender equality. To end child marriage, we promote girls’ education
            and rally the support of parents and community members.
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
          <h5>83.6% of people in Congo don’t have access to electricity</h5>
          <p>
            Most rely on kerosene at best, wood or charcoal at worst, for lighting. This causes
            indoor air pollution and chronic respiratory and lung diseases. According to the
            World Health Organization, Congo is among 10 countries most affected by indoor air
            pollution, resulting in more than 1.5 million deaths annually.  In addition, without
            electricity, Children lack sufficient light to read and study, making quality
            education unattainable.
          </p>
        </div>
        <div>
          <h5>The Solution</h5>
          <p>
            With recent reductions in the costs of solar panels, this mode of lighting is
            increasingly becoming the best option for remote, isolated areas. We focus on getting
            home solar systems in schools to enable them to use modern teaching materials.
            We work with communities to adopt solar systems in households, though the costs
            are still out of reach for most people in rural Congo.   A basic home solar system
            costs about $300-$400 (including a solar panel, a battery, a charge controller,
            LED lights, and charging outlets).
          </p>
          <p>
            We also work with communities to introduce common electric powered devices that
            reduce the work burden, especially for women.
          </p>
        </div>
      </div>
    )
  }
];

/**
 * /work route component
 */
export const Work = (props) => (
  <div>
    <ImageContainer src="/images/work-o.jpg">
      <Container className={classes.work} title="Work">
        <h6>
          Jimbere Fund works closely with communities and villages in remote areas of
          Democratic Republic of Congo to design and implement individualized high-impact
          social interventions. Communities identify their most pressing needs in agriculture,
          education, health, women’s empowerment, water and sanitation, and we work with them
          to find solutions.
        </h6>
      </Container>
    </ImageContainer>

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

export default secondaryTheme(Work);
