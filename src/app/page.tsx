"use client";

import React, { useState, Fragment } from "react";

import {
  Heading,
  Text,
  Button,
  Icon,
  InlineCode,
  Logo,
  Input,
  Avatar,
  AvatarGroup,
  Textarea,
  PasswordInput,
  SegmentedControl,
  SmartLink,
  Dialog,
  Feedback,
  SmartImage,
  Line,
  LogoCloud,
  Background,
  Select,
  useToast,
  Card,
  Fade,
  StatusIndicator,
  DateRangePicker,
  DateRange,
  TiltFx,
  HoloFx,
  IconButton,
  TagInput,
  Switch,
  Column,
  Row,
  StyleOverlay,
} from "@/once-ui/components";
import { CodeBlock, MediaUpload } from "@/once-ui/modules";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedRange, setSelectedRange] = useState<DateRange>();
  const [isFirstDialogOpen, setIsFirstDialogOpen] = useState(false);
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);
  const [firstDialogHeight, setFirstDialogHeight] = useState<number>();
  const { addToast } = useToast();
  const [intro, setIntro] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tags, setTags] = useState<string[]>(["UX / UI", "Design systems", "AI / ML"]);
  const [twoFA, setTwoFA] = useState(false);

  const handleSelect = (value: string) => {
    console.log("Selected option:", value);
    setSelectedValue(value);
  };

  const links = [
    {
      href: "https://once-ui.com/docs/theming",
      title: "Themes",
      description: "Style your app in minutes",
    },
    {
      href: "https://once-ui.com/docs/RowComponent",
      title: "Layout",
      description: "Build responsive layouts",
    },
    {
      href: "https://once-ui.com/docs/typography",
      title: "Typography",
      description: "Scale text automatically",
    },
  ];

  const validateIntro = (value: React.ReactNode) => {
    if (typeof value === "string" && value.length < 10) {
      return (
        <Row horizontal="center" marginBottom="12" gap="8">
          <Icon name="errorCircle" />
          Intro must be at least 10 characters long.
        </Row>
      );
    }
    return null;
  };

  const validateLogin = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return "Email and / or password is invalid.";
    }
    return null;
  };

  const handleHeightChange = (height: number): void => {
    setFirstDialogHeight(height);
  };

  return (
    <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1}>
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: "4",
        }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />
      <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={3}>
        <Row
          data-border="rounded"
          horizontal="space-between"
          maxWidth="l"
          paddingRight="64"
          paddingLeft="32"
          paddingY="20"
        >
          <Logo size="m" icon={false} href="https://once-ui.com" />
          <Row gap="12" hide="s">
            <Button
              href="https://discord.com/invite/5EyAQ4eNdS"
              prefixIcon="discord"
              size="s"
              label="Discord"
              weight="default"
              variant="tertiary"
            />
            <Button
              href="https://github.com/once-ui-system/nextjs-starter"
              prefixIcon="github"
              size="s"
              label="GitHub"
              weight="default"
              variant="tertiary"
            />
            <StyleOverlay top="20" right="24" />
          </Row>
          <Row gap="16" show="s" horizontal="center" paddingRight="24">
            <IconButton
              href="https://discord.com/invite/5EyAQ4eNdS"
              icon="discord"
              variant="tertiary"
            />
            <IconButton
              href="https://github.com/once-ui-system/nextjs-starter"
              icon="github"
              variant="tertiary"
            />
            <StyleOverlay top="20" right="24" />
          </Row>
        </Row>
      </Row>
      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        horizontal="center"
        border="neutral-alpha-weak"
        fillWidth
      >
        <Column
          fillWidth
          horizontal="center"
          gap="48"
          radius="xl"
          paddingTop="80"
          position="relative"
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "neutral-alpha-medium",
              height: "0.25rem",
            }}
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              width: 75,
              x: 100,
              y: 40,
              colorStart: "accent-solid-medium",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            mask={{
              x: 100,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              opacity: 100,
              tilt: -35,
              height: 20,
              width: 120,
              x: 120,
              y: 35,
              colorStart: "brand-solid-strong",
              colorEnd: "static-transparent",
            }}
          />
          <Column fillWidth horizontal="center" gap="32" padding="32" position="relative">
            <InlineCode radius="xl" shadow="m" fit paddingX="16" paddingY="8">
              Join our community
              <Text onBackground="brand-medium" marginLeft="8">
                Start coding today
              </Text>
            </InlineCode>
            
            <Heading 
              wrap="balance" 
              variant="display-default-l" 
              align="center" 
              marginBottom="16"
            >
              Empowering the Next Generation of Coders and Innovators Test 
            </Heading>

            <Text 
              align="center" 
              variant="body-default-l" 
              onBackground="neutral-medium"
              style={{ maxWidth: '36rem' }}
              marginBottom="32"
            >
              Deta is a non-profit, community-driven initiative dedicated to helping students and 
              professionals learn coding, develop digital skills, and create applications that solve 
              real-world problems.
            </Text>

            <Row gap="16">
              <Button
                label="Join the Community"
                variant="primary"
                size="l"
                arrowIcon
              />
              <Button
                label="Explore Projects" 
                variant="secondary"
                size="l"
              />
              <Button
                label="Learn to Code"
                variant="secondary" 
                size="l"
              />
            </Row>

            {/* Why Deta Section */}
            <Column horizontal="center" paddingTop="104" fillWidth gap="48">
              <Heading as="h2" variant="display-default-m" align="center">
                Why Deta?
              </Heading>
              
              <Row wrap={true} gap="32" fillWidth>
                <Card padding="32" fillWidth>
                  <Column gap="16">
                    <Icon name="gift" size="l" />
                    <Heading as="h3" variant="heading-default-m">
                      Free and Accessible
                    </Heading>
                    <Text onBackground="neutral-medium">
                      Everyone deserves the opportunity to learn coding, regardless of background.
                    </Text>
                  </Column>
                </Card>

                <Card padding="32" fillWidth>
                  <Column gap="16">
                    <Icon name="users" size="l" />
                    <Heading as="h3" variant="heading-default-m">
                      Community-Powered
                    </Heading>
                    <Text onBackground="neutral-medium">
                      Learn and grow with a supportive network of peers and mentors.
                    </Text>
                  </Column>
                </Card>

                <Card padding="32" fillWidth>
                  <Column gap="16">
                    <Icon name="target" size="l" />
                    <Heading as="h3" variant="heading-default-m">
                      Real-World Impact
                    </Heading>
                    <Text onBackground="neutral-medium">
                      Build applications that address social, environmental, and community challenges.
                    </Text>
                  </Column>
                </Card>
              </Row>
            </Column>

            {/* Impact Statistics Section */}
            <Column 
              horizontal="center" 
              paddingTop="104" 
              fillWidth 
              gap="64"
              background="surface"
              padding="80"
              border="neutral-alpha-weak"
              radius="xl"
              position="relative"
            >
              <Background
                mask={{
                  x: 0,
                  y: 0,
                  radius: 100,
                }}
                position="absolute"
                gradient={{
                  display: true,
                  tilt: -35,
                  height: 50,
                  width: 75,
                  x: 80,
                  y: 20,
                  colorStart: "brand-solid-medium",
                  colorEnd: "static-transparent",
                  opacity: 20
                }}
              />

              <Column gap="24" horizontal="center">
                <InlineCode radius="xl" shadow="m" fit paddingX="16" paddingY="8">
                  Our Growth
                  <Text onBackground="brand-medium" marginLeft="8">
                    2023 Impact Report
                  </Text>
                </InlineCode>
                
                <Heading as="h2" variant="display-default-l" align="center">
                  Making a Real Difference
                </Heading>
                
                <Text 
                  align="center" 
                  variant="body-default-l" 
                  onBackground="neutral-medium"
                  style={{ maxWidth: '36rem' }}
                  marginBottom="32"
                >
                  Through collaboration and dedication, we're building a more inclusive tech community.
                </Text>
              </Column>

              <Row wrap={true} gap="32" fillWidth horizontal="center" maxWidth="xl">
                <Card 
                  padding="48" 
                  background="surface"
                  style={{ 
                    flex: '1 1 calc(25% - 24px)', 
                    minWidth: '240px',
                    transition: 'box-shadow 0.2s ease-in-out'
                  }}
                  className="hover:shadow-lg"
                >
                  <Column gap="24" horizontal="center">
                    <Icon 
                      name="users" 
                      size="xl" 
                      onBackground="brand-strong"
                    />
                    <Column gap="8" horizontal="center">
                      <Heading 
                        as="h3"
                        variant="display-default-xl" 
                        align="center"
                        onBackground="brand-strong"
                      >
                        10,000+
                      </Heading>
                      <Text 
                        align="center" 
                        variant="body-strong-m"
                      >
                        Active Learners
                      </Text>
                      <Text 
                        align="center" 
                        variant="body-default-s" 
                        onBackground="neutral-medium"
                      >
                        From 50+ countries worldwide
                      </Text>
                    </Column>
                  </Column>
                </Card>

                <Card 
                  padding="48" 
                  background="surface"
                  style={{ 
                    flex: '1 1 calc(25% - 24px)', 
                    minWidth: '240px',
                    transition: 'box-shadow 0.2s ease-in-out'
                  }}
                  className="hover:shadow-lg"
                >
                  <Column gap="24" horizontal="center">
                    <Icon 
                      name="code" 
                      size="xl" 
                      onBackground="brand-strong"
                    />
                    <Column gap="8" horizontal="center">
                      <Heading 
                        as="h3" 
                        variant="display-default-xl" 
                        align="center"
                        onBackground="brand-strong"
                      >
                        500+
                      </Heading>
                      <Text 
                        align="center" 
                        variant="body-strong-m"
                      >
                        Projects Launched
                      </Text>
                      <Text 
                        align="center" 
                        variant="body-default-s" 
                        onBackground="neutral-medium"
                      >
                        Making real-world impact
                      </Text>
                    </Column>
                  </Column>
                </Card>

                <Card 
                  padding="48" 
                  background="surface"
                  style={{ 
                    flex: '1 1 calc(25% - 24px)', 
                    minWidth: '240px',
                    transition: 'box-shadow 0.2s ease-in-out'
                  }}
                  className="hover:shadow-lg"
                >
                  <Column gap="24" horizontal="center">
                    <Icon 
                      name="target" 
                      size="xl" 
                      onBackground="brand-strong"
                    />
                    <Column gap="8" horizontal="center">
                      <Heading 
                        as="h3" 
                        variant="display-default-xl" 
                        align="center"
                        onBackground="brand-strong"
                      >
                        25
                      </Heading>
                      <Text 
                        align="center" 
                        variant="body-strong-m"
                      >
                        Community Events
                      </Text>
                      <Text 
                        align="center" 
                        variant="body-default-s" 
                        onBackground="neutral-medium"
                      >
                        Hackathons & workshops
                      </Text>
                    </Column>
                  </Column>
                </Card>

                <Card 
                  padding="48" 
                  background="surface"
                  style={{ 
                    flex: '1 1 calc(25% - 24px)', 
                    minWidth: '240px',
                    transition: 'box-shadow 0.2s ease-in-out'
                  }}
                  className="hover:shadow-lg"
                >
                  <Column gap="24" horizontal="center">
                    <Icon 
                      name="handshake" 
                      size="xl" 
                      onBackground="brand-strong"
                    />
                    <Column gap="8" horizontal="center">
                      <Heading 
                        as="h3" 
                        variant="display-default-xl" 
                        align="center"
                        onBackground="brand-strong"
                      >
                        15
                      </Heading>
                      <Text 
                        align="center" 
                        variant="body-strong-m"
                      >
                        Partners
                      </Text>
                      <Text 
                        align="center" 
                        variant="body-default-s" 
                        onBackground="neutral-medium"
                      >
                        Industry collaborations
                      </Text>
                    </Column>
                  </Column>
                </Card>
              </Row>
            </Column>

            {/* Featured Projects Section */}
            <Column horizontal="center" paddingTop="104" fillWidth gap="48">
              <Column gap="24" horizontal="center">
                <Heading as="h2" variant="display-default-l" align="center">
                  Featured Projects
                </Heading>
                <Text 
                  align="center" 
                  variant="body-default-l" 
                  onBackground="neutral-medium"
                  style={{ maxWidth: '36rem' }}
                >
                  Discover some of our community's most innovative projects
                </Text>
              </Column>

              <Row 
                wrap={true} 
                gap="24" 
                fillWidth 
                maxWidth="xl"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                }}
              >
                {/* Project 1 */}
                <Card 
                  padding="32" 
                  background="surface"
                  style={{ transition: 'transform 0.2s ease-in-out' }}
                  className="hover:shadow-lg hover:scale-102"
                >
                  <Column gap="16">
                    <Icon name="code" size="xl" onBackground="brand-strong" />
                    <Heading as="h3" variant="heading-default-m">
                      EcoTracker
                    </Heading>
                    <Text onBackground="neutral-medium">
                      A mobile app that helps users track their carbon footprint and suggests eco-friendly alternatives for daily activities.
                    </Text>
                  </Column>
                </Card>

                {/* Project 2 */}
                <Card 
                  padding="32" 
                  background="surface"
                  style={{ transition: 'transform 0.2s ease-in-out' }}
                  className="hover:shadow-lg hover:scale-102"
                >
                  <Column gap="16">
                    <Icon name="brain" size="xl" onBackground="brand-strong" />
                    <Heading as="h3" variant="heading-default-m">
                      StudyBuddy AI
                    </Heading>
                    <Text onBackground="neutral-medium">
                      An AI-powered study assistant that creates personalized learning paths and interactive quizzes for students.
                    </Text>
                  </Column>
                </Card>

                {/* Project 3 */}
                <Card 
                  padding="32" 
                  background="surface"
                  style={{ transition: 'transform 0.2s ease-in-out' }}
                  className="hover:shadow-lg hover:scale-102"
                >
                  <Column gap="16">
                    <Icon name="heart" size="xl" onBackground="brand-strong" />
                    <Heading as="h3" variant="heading-default-m">
                      HealthConnect
                    </Heading>
                    <Text onBackground="neutral-medium">
                      A telemedicine platform connecting rural communities with healthcare professionals for remote consultations.
                    </Text>
                  </Column>
                </Card>

                {/* Project 4 */}
                <Card 
                  padding="32" 
                  background="surface"
                  style={{ transition: 'transform 0.2s ease-in-out' }}
                  className="hover:shadow-lg hover:scale-102"
                >
                  <Column gap="16">
                    <Icon name="users" size="xl" onBackground="brand-strong" />
                    <Heading as="h3" variant="heading-default-m">
                      CommunityHub
                    </Heading>
                    <Text onBackground="neutral-medium">
                      A platform for organizing local volunteer initiatives and connecting helpers with those in need.
                    </Text>
                  </Column>
                </Card>

                {/* Project 5 */}
                <Card 
                  padding="32" 
                  background="surface"
                  style={{ transition: 'transform 0.2s ease-in-out' }}
                  className="hover:shadow-lg hover:scale-102"
                >
                  <Column gap="16">
                    <Icon name="book" size="xl" onBackground="brand-strong" />
                    <Heading as="h3" variant="heading-default-m">
                      LearnLingo
                    </Heading>
                    <Text onBackground="neutral-medium">
                      An interactive language learning app featuring AI-powered conversation practice and cultural exchange.
                    </Text>
                  </Column>
                </Card>

                {/* Project 6 */}
                <Card 
                  padding="32" 
                  background="surface"
                  style={{ transition: 'transform 0.2s ease-in-out' }}
                  className="hover:shadow-lg hover:scale-102"
                >
                  <Column gap="16">
                    <Icon name="leaf" size="xl" onBackground="brand-strong" />
                    <Heading as="h3" variant="heading-default-m">
                      SmartFarm
                    </Heading>
                    <Text onBackground="neutral-medium">
                      An IoT solution for sustainable agriculture, monitoring crop health and optimizing resource usage.
                    </Text>
                  </Column>
                </Card>
              </Row>
            </Column>

            {/* Testimonials Section */}
            <Column horizontal="center" paddingTop="104" fillWidth gap="48">
              <Heading as="h2" variant="display-default-m" align="center">
                What Our Community Says
              </Heading>

              <Row 
                wrap={true} 
                gap="24" 
                fillWidth 
                maxWidth="xl"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  overflowX: 'auto'
                }}
              >
                {/* Testimonial 1 */}
                <Card 
                  padding="24" 
                  background="surface"
                  radius="xl"
                  style={{ 
                    minWidth: '240px',
                    transition: 'transform 0.2s ease-in-out'
                  }}
                  className="hover:shadow-lg"
                >
                  <Column gap="12">
                    <Icon name="quote" size="m" onBackground="brand-strong" />
                    <Text 
                      onBackground="neutral-medium" 
                      style={{ 
                        fontStyle: 'italic',
                        fontSize: '0.9rem',
                        lineHeight: '1.5'
                      }}
                    >
                      "Deta gave me the skills and confidence to build my first app. The supportive community made learning to code an amazing journey!"
                    </Text>
                    <Text variant="body-strong-s">Sarah T.</Text>
                    <Text variant="body-default-xs" onBackground="neutral-medium">Student</Text>
                  </Column>
                </Card>

                {/* Testimonial 2 */}
                <Card 
                  padding="24" 
                  background="surface"
                  radius="xl"
                  style={{ 
                    minWidth: '240px',
                    transition: 'transform 0.2s ease-in-out'
                  }}
                  className="hover:shadow-lg"
                >
                  <Column gap="12">
                    <Icon name="quote" size="m" onBackground="brand-strong" />
                    <Text 
                      onBackground="neutral-medium" 
                      style={{ 
                        fontStyle: 'italic',
                        fontSize: '0.9rem',
                        lineHeight: '1.5'
                      }}
                    >
                      "I transitioned into tech thanks to Deta's resources and mentorship. The hands-on projects were invaluable."
                    </Text>
                    <Text variant="body-strong-s">James L.</Text>
                    <Text variant="body-default-xs" onBackground="neutral-medium">Software Developer</Text>
                  </Column>
                </Card>

                {/* Testimonial 3 */}
                <Card 
                  padding="24" 
                  background="surface"
                  radius="xl"
                  style={{ 
                    minWidth: '240px',
                    transition: 'transform 0.2s ease-in-out'
                  }}
                  className="hover:shadow-lg"
                >
                  <Column gap="12">
                    <Icon name="quote" size="m" onBackground="brand-strong" />
                    <Text 
                      onBackground="neutral-medium" 
                      style={{ 
                        fontStyle: 'italic',
                        fontSize: '0.9rem',
                        lineHeight: '1.5'
                      }}
                    >
                      "Project-based learning helped me grasp complex concepts. The real-world applications made everything click."
                    </Text>
                    <Text variant="body-strong-s">Elena R.</Text>
                    <Text variant="body-default-xs" onBackground="neutral-medium">Data Scientist</Text>
                  </Column>
                </Card>

                {/* Testimonial 4 */}
                <Card 
                  padding="24" 
                  background="surface"
                  radius="xl"
                  style={{ 
                    minWidth: '240px',
                    transition: 'transform 0.2s ease-in-out'
                  }}
                  className="hover:shadow-lg"
                >
                  <Column gap="12">
                    <Icon name="quote" size="m" onBackground="brand-strong" />
                    <Text 
                      onBackground="neutral-medium" 
                      style={{ 
                        fontStyle: 'italic',
                        fontSize: '0.9rem',
                        lineHeight: '1.5'
                      }}
                    >
                      "The community provided the guidance I needed. Their feedback and support were instrumental in my growth."
                    </Text>
                    <Text variant="body-strong-s">Michael K.</Text>
                    <Text variant="body-default-xs" onBackground="neutral-medium">Frontend Developer</Text>
                  </Column>
                </Card>

                {/* Testimonial 5 */}
                <Card 
                  padding="24" 
                  background="surface"
                  radius="xl"
                  style={{ 
                    minWidth: '240px',
                    transition: 'transform 0.2s ease-in-out'
                  }}
                  className="hover:shadow-lg"
                >
                  <Column gap="12">
                    <Icon name="quote" size="m" onBackground="brand-strong" />
                    <Text 
                      onBackground="neutral-medium" 
                      style={{ 
                        fontStyle: 'italic',
                        fontSize: '0.9rem',
                        lineHeight: '1.5'
                      }}
                    >
                      "The diverse community helped me grow professionally. I learned so much from collaborating with others."
                    </Text>
                    <Text variant="body-strong-s">Priya M.</Text>
                    <Text variant="body-default-xs" onBackground="neutral-medium">Full Stack Engineer</Text>
                  </Column>
                </Card>

                {/* Testimonial 6 */}
                <Card 
                  padding="24" 
                  background="surface"
                  radius="xl"
                  style={{ 
                    minWidth: '240px',
                    transition: 'transform 0.2s ease-in-out'
                  }}
                  className="hover:shadow-lg"
                >
                  <Column gap="12">
                    <Icon name="quote" size="m" onBackground="brand-strong" />
                    <Text 
                      onBackground="neutral-medium" 
                      style={{ 
                        fontStyle: 'italic',
                        fontSize: '0.9rem',
                        lineHeight: '1.5'
                      }}
                    >
                      "Real-world projects helped me land my dream job. The practical experience was exactly what employers wanted."
                    </Text>
                    <Text variant="body-strong-s">David W.</Text>
                    <Text variant="body-default-xs" onBackground="neutral-medium">Backend Developer</Text>
                  </Column>
                </Card>
              </Row>
            </Column>

            {/* Newsletter Section */}
            <Column horizontal="center" paddingTop="104" fillWidth gap="32">
              <Heading as="h2" variant="display-default-m" align="center">
                Stay Connected
              </Heading>
              
              <Text align="center" onBackground="neutral-medium" marginBottom="32">
                Get the latest updates, resources, and event invites delivered to your inbox.
              </Text>

              <Row gap="32" fillWidth wrap={true} style={{ maxWidth: '32rem' }}>
                <Input
                  id="newsletter"
                  label="Email"
                  placeholder=""
                  type="email"
                  size={1}
                  width="full"
                  aria-label="Email newsletter signup"
                />
                <Button 
                  label="Subscribe" 
                  size="l"
                />
              </Row>

              <Row gap="16" marginTop="32">
                <IconButton
                  href="https://twitter.com"
                  icon="twitter"
                  variant="tertiary"
                  tooltip="Twitter"
                />
                <IconButton
                  href="https://linkedin.com"
                  icon="linkedin"
                  variant="tertiary"
                  tooltip="LinkedIn"
                />
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>

      <Dialog
        isOpen={isFirstDialogOpen}
        onClose={() => setIsFirstDialogOpen(false)}
        title="Account details"
        description="Manage your security settings and password."
        base={isSecondDialogOpen}
        onHeightChange={handleHeightChange}
        footer={
          <Fragment>
            <Button variant="secondary" onClick={() => setIsFirstDialogOpen(false)}>
              Close
            </Button>
          </Fragment>
        }
      >
        <Column paddingTop="24" fillWidth gap="24">
          <Switch
            reverse
            isChecked={twoFA}
            onToggle={() => setTwoFA(!twoFA)}
            label="2FA"
            description="Enable two factor authentication"
          />
          <Button onClick={() => setIsSecondDialogOpen(true)}>Change password</Button>
        </Column>
      </Dialog>
      <Dialog
        isOpen={isSecondDialogOpen}
        onClose={() => setIsSecondDialogOpen(false)}
        title="Change password"
        stack
        description="Choose a new password for your account."
        minHeight={firstDialogHeight}
        footer={
          <React.Fragment>
            <Button variant="secondary" onClick={() => setIsSecondDialogOpen(false)}>
              Close
            </Button>
            <Button 
              label="Save"
              onClick={() => setIsSecondDialogOpen(false)} 
            />
          </React.Fragment>
        }
      >
        <PasswordInput id="resetPassword" label="New password" />
      </Dialog>
    </Column>
  );
}
