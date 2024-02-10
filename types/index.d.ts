import type {
  Resume as _Resume,
  Header as _Header,
  Section as _Section,
} from "@prisma/client";

type SectionType =
  | "summary"
  | "experience"
  | "education"
  | "languages"
  | "skills"
  | "projects"
  | "volunteering"
  | "certifications"
  | "strengths";

declare global {
  type Header = _Header;
  type Section = _Section & { type: SectionType };
  type Resume = _Resume & { header: _Header; sections: Section[] };
}
export {};
