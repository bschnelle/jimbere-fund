import React from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import classes from './GetInvolved.scss';

export const GetInvolved = () => (
  <div>
    <ImageContainer className={classes.imageContainer} src="/images/new_york-o.jpg">
      <Container className={classes.container} fluid title="Get Involved">
        <div className={classes.joinUs}>
          <div className={classes.header}>
            <div>
              <h6>We need your time and talents.</h6>
            </div>
          </div>
          <div className={classes.tiles}>
            <div>
              <div>
                <h5>Start a</h5>
                <h5>Fundraiser</h5>
              </div>
            </div>
            <div>
              <div>
                <h5>Newsletter</h5>
                <h5>Sign up</h5>
              </div>
            </div>
            <div>
              <div>
                <h5>Work</h5>
                <h5>With Us</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ImageContainer>

    <Container id="gi-fundraising" section title="Fundraising">
      <div className={classes.fundraising}>
        <p>
          Ready to join the hard work of rebuilding communities in Congo?
          Our fundraisers help expand opportunities to those who need help
          most; one community at time.
        </p>
        <div>
          <h4>Step 1</h4>
          <p>
            Choose an event or activity: throw a party, run
            a marathon, or organize a meeting.  Be creative!
          </p>
        </div>
        <div>
          <h4>Step 2</h4>
          <p>
            Set an amount as your fundraising goal.
          </p>
        </div>
        <div>
          <h4>Step 3</h4>
          <p>
            Create an online fundraising page here, add information,
            and share with family and friends via social media/email.
          </p>
        </div>
      </div>
    </Container>

    <ImageContainer src="/images/news-o.jpg">
      <Container id="gi-newsletter" className={classes.newsletter} section title="Newsletter">
        <p>Join our weekly mailing list to stay up to date with our progress</p>
        <Button label="Sign Up" to="/sign-up" />
      </Container>
    </ImageContainer>

    <Container id="gi-work-with-us" section title="Work With Us">
      <div className={classes.workWithUs}>
        <p>We're always looking for great people to join our cause.</p>
        <div>
          <h4>Jobs</h4>
          <span />
          <p>There are currently no job openings.  Please check back soon.</p>
        </div>
        <div>
          <h4>Volunteers</h4>
          <span />
          <p>
            We're currently looking for volunteers with
            skills and expertise in the following fields:
          </p>
          <ul>
            <li>Graphic Design</li>
            <li>Nonprofit Strategy & Planning</li>
            <li>Blogging/Storytelling</li>
            <li>Social Media Strategy</li>
            <li>Brand Positioning & Messaging</li>
            <li>Financial Planning & Fundraising</li>
          </ul>
        </div>
        <div>
          <Button label="Contact" to="/contact" />
        </div>
      </div>
    </Container>
  </div>
);

export default secondaryTheme(GetInvolved);
