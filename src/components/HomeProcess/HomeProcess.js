import React from 'react';
import Section from '../Section/Section';
import classes from './HomeProcess.scss';

const HomeProcess = () => (
  <Section className={classes.section} container title="Process">
    <div className={classes.process}>
      <div>
        <div>
          <div />
          <div />
          <div>
            <h2>01</h2>
            <p>Listen and learn from communities.</p>
          </div>
        </div>

        <div>
          <div>
            <p>Collaboratively identify top priorities and build consensus.</p>
            <h2>02</h2>
          </div>
          <div />
          <div />
        </div>

        <div>
          <div />
          <div />
          <div>
            <h2>03</h2>
            <p>Co-design high-impact social projects.</p>
          </div>
        </div>

        <div>
          <div>
            <p>Provide funding to implement projects.</p>
            <h2>04</h2>
          </div>
          <div />
          <div />
        </div>

        <div>
          <div />
          <div />
          <div>
            <h2>05</h2>
            <p>Co-manage projects with the communities we serve.</p>
          </div>
        </div>

        <div>
          <div>
            <p>Follow-up to make sure projects are sustainable, then exit.</p>
            <h2>06</h2>
          </div>
          <div />
          <div />
        </div>
      </div>
    </div>
  </Section>
);

export default HomeProcess;
