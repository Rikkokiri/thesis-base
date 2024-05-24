import { LocalizedString } from "./types";

export type ExternalLink = {
  url: string;
  text?: LocalizedString;
};

export type Candidate = {
  id: string;
  name: string;
  candidateNumber?: number;
  creator: string;
  organization?: string;
  numberOfComponents?: number;
  website?: ExternalLink;
  github?: ExternalLink;
  promises?: LocalizedString[];
  // TODO: Release date
  // TODO: Current version
  // TODO: License
};

const AntDesign: Candidate = {
  id: "ant",
  name: "Ant Design",
  creator: "Ant Financial",
  website: {
    url: "https://ant.design/",
  },
  github: {
    url: "https://github.com/ant-design/ant-design",
  },
};

const ChakraUI: Candidate = {
  id: "chakra",
  name: "Chakra UI",
  creator: "Segun Adebayo",
  website: {
    url: "https://v2.chakra-ui.com/",
  },
  github: {
    url: "https://github.com/chakra-ui/chakra-ui",
  },
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
  website: {
    url: "https://mantine.dev/",
  },
  github: {
    url: "https://github.com/mantinedev/mantine",
  },
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
  website: {
    url: "https://ui.shadcn.com/",
  },
  github: {
    url: "https://github.com/shadcn-ui/ui",
  },
  promises: [],
};

export const CANDIDATES: Candidate[] = [AntDesign, ChakraUI, Mantine, shadcnui];
