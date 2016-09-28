import React from 'react';
import Section from '../Section/Section';
import classes from './HomeProcess.scss';

const HomeProcess = () => (
  <Section className={classes.section} title="Process">
    <div className={classes.content}>
      <div>
        <div className={classes.process}>
          <div>
            <div>
              <div />
              <div />
              <div>
                <h1>01</h1>
                <p>Listen and learn from communities.</p>
              </div>
            </div>

            <div>
              <div>
                <p>Collaboratively identify top priorities and build consensus.</p>
                <h1>02</h1>
              </div>
              <div />
              <div />
            </div>

            <div>
              <div />
              <div />
              <div>
                <h1>03</h1>
                <p>Co-design high-impact social projects.</p>
              </div>
            </div>

            <div>
              <div>
                <p>Provide funding to implement projects.</p>
                <h1>04</h1>
              </div>
              <div />
              <div />
            </div>

            <div>
              <div />
              <div />
              <div>
                <h1>05</h1>
                <p>Co-manage projects with the communities we serve.</p>
              </div>
            </div>

            <div>
              <div>
                <p>Follow-up to make sure projects are sustainable, then exit.</p>
                <h1>06</h1>
              </div>
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default HomeProcess;
