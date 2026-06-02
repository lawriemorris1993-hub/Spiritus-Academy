// Academic programmes, contact details and configurations for Spiritus Academy (SPICA Academy)

export interface SubjectCategory {
  title: string;
  description: string;
  subjects: string[];
}

export const ACADEMY_INFO = {
  name: "Spiritus Academy",
  alias: "SPICA Academy",
  tagline: "Rooted in Faith. Growing in Grace.",
  location: "Bulawayo CBD, Zimbabwe",
  locationDetails: "Providing a peaceful, disciplined learning environment nested in the heart of Bulawayo's Central Business District.",
  aboutText: "Spiritus Academy is a Christian academic institution based in Bulawayo CBD, dedicated to providing quality education rooted in faith, discipline, academic excellence, and personal growth. Our holistic approach prepares future leaders academically, spiritually, and socially to make a positive impact in Zimbabwe and beyond.",
  curriculumNote: "ZIMSEC curriculum offered.",
  quote: "Preparing learners for academic success, leadership and service.",
};

export const CONTACT_NUMBERS = [
  {
    display: "+263 775 939 333",
    value: "263775939333",
    label: "Main Admissions Office"
  },
  {
    display: "+263 778 279 814",
    value: "263778279814",
    label: "Secondary contact & Information"
  }
];

export const CURRENT_YEAR = new Date().getFullYear().toString();

export const WHATSAPP_PREFILLED_MESSAGE = "Hello Spiritus Academy, I would like information about admissions.";

// Helper function to generate clean WhatsApp URL for a specific phone number
export function getWhatsAppUrl(phoneNumber: string, message: string = WHATSAPP_PREFILLED_MESSAGE): string {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

// Subject listings as requested by user
export const PROGRAMMES: SubjectCategory[] = [
  {
    title: "Commercial Subjects",
    description: "Equipping future entrepreneurs and corporate leaders with modern economic principles.",
    subjects: ["Accounting", "Business Studies", "Economics", "Commerce"]
  },
  {
    title: "Science Subjects",
    description: "Developing critical analytical research, logical analysis, and scientific discovery.",
    subjects: ["Mathematics", "Biology", "Chemistry", "Physics", "Combined Science"]
  },
  {
    title: "Arts Subjects",
    description: "Fostering descriptive writing, ethical reflection, geographic insights, and global history.",
    subjects: ["History", "Geography", "Literature in English", "Family & Religious Studies", "Heritage Studies"]
  }
];
