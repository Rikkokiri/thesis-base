import { LocalizedString } from "./types";

export type ExternalLink = {
  url: string;
  text: LocalizedString;
};

export type Candidate = {
  id: string;
  name: string;
  creator: string;
  numberOfComponents?: number;
  website?: string;
  github?: string;
  promises?: LocalizedString[];
  // TODO: Release date
  // TODO: Current version
  // TODO: License
};

const AntDesign: Candidate = {
  id: "ant",
  name: "Ant Design",
  creator: "Ant Financial",
  website: "https://ant.design/",
  github: "https://github.com/ant-design/ant-design",
};

const ChakraUI: Candidate = {
  id: "chakra",
  name: "Chakra UI",
  creator: "Segun Adebayo",
  website: "https://v2.chakra-ui.com/",
  github: "https://github.com/chakra-ui/chakra-ui",
  promises: [
    {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      fi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      en: "Chakra is not tied down by any design systems and offers more freedom with customizing the components to implement your own design.",
      fi: "Chakra is not tied down by any design systems and offers more freedom with customizing the components to implement your own design.",
    },
  ],
};

const Mantine: Candidate = {
  id: "mantine",
  name: "Mantine",
  creator: "Vitaly Rtishchev",
  website: "https://mantine.dev/",
  github: "https://github.com/mantinedev/mantine",
  promises: [
    {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      fi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      en: "Chakra is not tied down by any design systems and offers more freedom with customizing the components to implement your own design.",
      fi: "Chakra is not tied down by any design systems and offers more freedom with customizing the components to implement your own design.",
    },
  ],
};

const shadcnui: Candidate = {
  id: "shadcnui",
  name: "shadcn/ui",
  creator: "shadcn",
  website: "https://ui.shadcn.com/",
  github: "https://github.com/shadcn-ui/ui",
  promises: [],
};

export const CANDIDATES: Candidate[] = [AntDesign, ChakraUI, Mantine, shadcnui];
