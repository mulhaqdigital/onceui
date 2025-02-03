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
              Empowering the Next Generation of Coders and Innovators
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
              gap="48"
              background="surface"
              padding="64"
              border="neutral-alpha-weak"
              radius="xl"
            >
              <Heading as="h2" variant="display-default-m" align="center">
                Our Impact
              </Heading>
              
              <Text 
                align="center" 
                variant="body-default-l" 
                onBackground="neutral-medium"
                marginBottom="32"
              >
                Since our inception, Deta has:
              </Text>

              <Row wrap={true} gap="32" fillWidth>
                <Card padding="32" fillWidth background="page">
                  <Column gap="8" horizontal="center">
                    <Heading 
                      as="h3"
                      variant="display-default-xl" 
                      align="center"
                      onBackground="brand-strong"
                    >
                      10,000+
                    </Heading>
                    <Text align="center" onBackground="neutral-medium">
                      Learners taught worldwide
                    </Text>
                  </Column>
                </Card>

                <Card padding="32" fillWidth background="page">
                  <Column gap="8" horizontal="center">
                    <Heading 
                      as="h3" 
                      variant="display-default-xl" 
                      align="center"
                      onBackground="brand-strong"
                    >
                      500+
                    </Heading>
                    <Text align="center" onBackground="neutral-medium">
                      Real-world projects developed
                    </Text>
                  </Column>
                </Card>

                <Card padding="32" fillWidth background="page">
                  <Column gap="8" horizontal="center">
                    <Heading 
                      as="h3" 
                      variant="display-default-xl" 
                      align="center"
                      onBackground="brand-strong"
                    >
                      25
                    </Heading>
                    <Text align="center" onBackground="neutral-medium">
                      Hackathons and community events
                    </Text>
                  </Column>
                </Card>

                <Card padding="32" fillWidth background="page">
                  <Column gap="8" horizontal="center">
                    <Heading 
                      as="h3" 
                      variant="display-default-xl" 
                      align="center"
                      onBackground="brand-strong"
                    >
                      15
                    </Heading>
                    <Text align="center" onBackground="neutral-medium">
                      Partner organizations
                    </Text>
                  </Column>
                </Card>
              </Row>
            </Column>

            {/* Project Categories Section */}
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
                }}
                position="absolute"
                grid={{
                  display: true,
                  color: "neutral-alpha-medium",
                  width: "2rem",
                  height: "2rem",
                  opacity: 20
                }}
              />

              <Column gap="24" horizontal="center">
                <Heading as="h2" variant="display-default-l" align="center">
                  Project Categories
                </Heading>
                <Text 
                  align="center" 
                  variant="body-default-l" 
                  onBackground="neutral-medium"
                  style={{ maxWidth: '32rem' }}
                >
                  Browse projects by category to find inspiration or contribute to a cause you care about.
                </Text>
              </Column>

              <Row wrap={true} gap="40" fillWidth maxWidth="xl">
                {/* Education Card */}
                <Card 
                  key="education"
                  padding="48" 
                  fillWidth 
                  background="page"
                  border="neutral-alpha-weak"
                  radius="l"
                  style={{ flex: '1 1 calc(50% - 20px)' }}
                >
                  <Column gap="32">
                    <Row horizontal="space-between" vertical="center">
                      <Icon name="book" size="xl" onBackground="brand-strong" />
                      <Button 
                        variant="tertiary" 
                        label="Browse Projects" 
                        arrowIcon 
                        size="s"
                      />
                    </Row>
                    <Column gap="12">
                      <Heading as="h3" variant="display-default-s">
                        Education
                      </Heading>
                      <Text 
                        variant="body-default-l"
                        onBackground="neutral-medium"
                      >
                        Tools and platforms to enhance learning and teaching.
                      </Text>
                    </Column>
                  </Column>
                </Card>

                {/* Healthcare Card */}
                <Card 
                  key="healthcare"
                  padding="48" 
                  fillWidth 
                  background="page"
                  border="neutral-alpha-weak"
                  radius="l"
                  style={{ flex: '1 1 calc(50% - 20px)' }}
                >
                  <Column gap="32">
                    <Row horizontal="space-between" vertical="center">
                      <Icon name="heart" size="xl" onBackground="brand-strong" />
                      <Button 
                        variant="tertiary" 
                        label="Browse Projects" 
                        arrowIcon 
                        size="s"
                      />
                    </Row>
                    <Column gap="12">
                      <Heading as="h3" variant="display-default-s">
                        Healthcare
                      </Heading>
                      <Text 
                        variant="body-default-l"
                        onBackground="neutral-medium"
                      >
                        Applications improving access to healthcare services.
                      </Text>
                    </Column>
                  </Column>
                </Card>

                {/* Sustainability Card */}
                <Card 
                  key="sustainability"
                  padding="48" 
                  fillWidth 
                  background="page"
                  border="neutral-alpha-weak"
                  radius="l"
                  style={{ flex: '1 1 calc(50% - 20px)' }}
                >
                  <Column gap="32">
                    <Row horizontal="space-between" vertical="center">
                      <Icon name="leaf" size="xl" onBackground="brand-strong" />
                      <Button 
                        variant="tertiary" 
                        label="Browse Projects" 
                        arrowIcon 
                        size="s"
                      />
                    </Row>
                    <Column gap="12">
                      <Heading as="h3" variant="display-default-s">
                        Sustainability
                      </Heading>
                      <Text 
                        variant="body-default-l"
                        onBackground="neutral-medium"
                      >
                        Projects focused on environmental conservation and green living.
                      </Text>
                    </Column>
                  </Column>
                </Card>

                {/* Community Card */}
                <Card 
                  key="community"
                  padding="48" 
                  fillWidth 
                  background="page"
                  border="neutral-alpha-weak"
                  radius="l"
                  style={{ flex: '1 1 calc(50% - 20px)' }}
                >
                  <Column gap="32">
                    <Row horizontal="space-between" vertical="center">
                      <Icon name="users" size="xl" onBackground="brand-strong" />
                      <Button 
                        variant="tertiary" 
                        label="Browse Projects" 
                        arrowIcon 
                        size="s"
                      />
                    </Row>
                    <Column gap="12">
                      <Heading as="h3" variant="display-default-s">
                        Community
                      </Heading>
                      <Text 
                        variant="body-default-l"
                        onBackground="neutral-medium"
                      >
                        Solutions addressing local challenges and fostering community engagement.
                      </Text>
                    </Column>
                  </Column>
                </Card>
              </Row>
            </Column>

            {/* Featured Projects Section */}
            <Column horizontal="center" paddingTop="104" fillWidth gap="48">
              <Heading as="h2" variant="display-default-m" align="center">
                Featured Projects
              </Heading>

              <Row wrap={true} gap="32" fillWidth>
                <Card padding="32" fillWidth>
                  <Column gap="16">
                    <Icon name="code" size="l" />
                    <Heading as="h3" variant="heading-default-m">
                      Hackathon Platform
                    </Heading>
                    <Text onBackground="neutral-medium">
                      A collaborative platform for organizing and participating in coding competitions and hackathons.
                    </Text>
                    <Button variant="tertiary" label="Learn More" arrowIcon />
                  </Column>
                </Card>

                <Card padding="32" fillWidth>
                  <Column gap="16">
                    <Icon name="kanban" size="l" />
                    <Heading as="h3" variant="heading-default-m">
                      Project Management
                    </Heading>
                    <Text onBackground="neutral-medium">
                      Streamlined project tracking and team collaboration tools for developers.
                    </Text>
                    <Button variant="tertiary" label="Learn More" arrowIcon />
                  </Column>
                </Card>

                <Card padding="32" fillWidth>
                  <Column gap="16">
                    <Icon name="users" size="l" />
                    <Heading as="h3" variant="heading-default-m">
                      Tech Meetup
                    </Heading>
                    <Text onBackground="neutral-medium">
                      Connect with local tech communities and organize coding meetups.
                    </Text>
                    <Button variant="tertiary" label="Learn More" arrowIcon />
                  </Column>
                </Card>

                <Card padding="32" fillWidth>
                  <Column gap="16">
                    <Icon name="shield" size="l" />
                    <Heading as="h3" variant="heading-default-m">
                      Cybersecurity Hub
                    </Heading>
                    <Text onBackground="neutral-medium">
                      Learn and practice cybersecurity through hands-on exercises and challenges.
                    </Text>
                    <Button variant="tertiary" label="Learn More" arrowIcon />
                  </Column>
                </Card>
              </Row>
            </Column>

            {/* Testimonials Section */}
            <Column horizontal="center" paddingTop="104" fillWidth gap="48">
              <Heading as="h2" variant="display-default-m" align="center">
                What Our Community Says
              </Heading>

              <Row wrap={true} gap="32" fillWidth>
                <Card padding="32" fillWidth>
                  <Column gap="16">
                    <Text onBackground="neutral-medium" style={{ fontStyle: 'italic' }}>
                      "Deta gave me the skills and confidence to build my first app. The community support was incredible!"
                    </Text>
                    <Text variant="body-strong-m">Sarah T.</Text>
                    <Text variant="body-default-s" onBackground="neutral-medium">Student</Text>
                  </Column>
                </Card>

                <Card padding="32" fillWidth>
                  <Column gap="16">
                    <Text onBackground="neutral-medium" style={{ fontStyle: 'italic' }}>
                      "I transitioned into a tech career thanks to Deta's resources and mentorship programs."
                    </Text>
                    <Text variant="body-strong-m">James L.</Text>
                    <Text variant="body-default-s" onBackground="neutral-medium">Software Developer</Text>
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
                  placeholder="Enter your email"
                  type="email"
                />
                <Button label="Subscribe" />
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
                <IconButton
                  href="https://github.com"
                  icon="github"
                  variant="tertiary"
                  tooltip="GitHub"
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
        onHeightChange={(height: number) => setFirstDialogHeight(height)}
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
