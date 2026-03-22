export type YcStartupJob = {
  rank: number
  /** Full listing title (HN-style). */
  headline: string
  /** Host for outbound link (https:// prepended). */
  linkHost: string
  posted: string
}

function jobUrl(host: string) {
  if (host.startsWith("http://") || host.startsWith("https://")) return host
  if (host === "ycombinator.com" || host === "www.ycombinator.com") {
    return "https://www.ycombinator.com/jobs"
  }
  if (host === "workatastartup.com" || host === "www.workatastartup.com") {
    return "https://www.workatastartup.com"
  }
  return `https://${host}`
}

export function ycJobApplyUrl(job: YcStartupJob) {
  return jobUrl(job.linkHost)
}

/** Example data in the spirit of HN / YC jobs listings (not live). */
export const ycStartupJobs: YcStartupJob[] = [
  {
    rank: 1,
    headline: "Ndea (YC W26) is hiring a symbolic RL search guidance lead",
    linkHost: "ndea.com",
    posted: "3 days ago",
  },
  {
    rank: 2,
    headline: "Spice Data (YC S19) Is Hiring a Product Specialist",
    linkHost: "ycombinator.com",
    posted: "4 days ago",
  },
  {
    rank: 3,
    headline: "AnswerThis (YC F25) Is Hiring",
    linkHost: "ycombinator.com",
    posted: "5 days ago",
  },
  {
    rank: 4,
    headline: "Kaizen (YC P25) Hiring Eng, GTM, Cos to Automate BPOs",
    linkHost: "kaizenautomation.com",
    posted: "5 days ago",
  },
  {
    rank: 5,
    headline: "Nango (YC W23, API Access for Agents and Apps) Is Hiring",
    linkHost: "ashbyhq.com",
    posted: "5 days ago",
  },
  {
    rank: 6,
    headline: "9 Mothers Defense (YC P26) Is Hiring in Austin",
    linkHost: "ashbyhq.com",
    posted: "7 days ago",
  },
  {
    rank: 7,
    headline:
      "Converge (YC S23) Is Hiring a Founding Platform Engineer (NYC, Onsite)",
    linkHost: "runconverge.com",
    posted: "9 days ago",
  },
  {
    rank: 8,
    headline:
      "Hive (YC S14) is hiring scrappy product managers and product/data engineers",
    linkHost: "ashbyhq.com",
    posted: "9 days ago",
  },
  {
    rank: 9,
    headline: "Meticulous (YC S21) is hiring to redefine software dev",
    linkHost: "ashbyhq.com",
    posted: "10 days ago",
  },
  {
    rank: 10,
    headline:
      "SigNoz (YC W21) is hiring for engineering, growth and product roles",
    linkHost: "signoz.io",
    posted: "14 days ago",
  },
  {
    rank: 11,
    headline: "Multifactor (YC F25) Is Hiring an Engineering Lead",
    linkHost: "ycombinator.com",
    posted: "15 days ago",
  },
  {
    rank: 12,
    headline: "Stardex (YC S21) is hiring customer success engineers",
    linkHost: "ycombinator.com",
    posted: "15 days ago",
  },
  {
    rank: 13,
    headline: "Structured AI (YC F25) Is Hiring",
    linkHost: "ycombinator.com",
    posted: "16 days ago",
  },
  {
    rank: 14,
    headline:
      "Roboflow (YC S20) Is Hiring a Security Engineer for AI Infra",
    linkHost: "roboflow.com",
    posted: "17 days ago",
  },
  {
    rank: 15,
    headline: "Jiga (YC W21) Is Hiring",
    linkHost: "jiga.io",
    posted: "17 days ago",
  },
  {
    rank: 16,
    headline: "Reflex (YC W23) Is Hiring Software Engineers – Python",
    linkHost: "ycombinator.com",
    posted: "19 days ago",
  },
  {
    rank: 17,
    headline:
      "Kyber (YC W23) Is Hiring an Enterprise Account Executive",
    linkHost: "ycombinator.com",
    posted: "22 days ago",
  },
  {
    rank: 18,
    headline:
      "Ubicloud (YC W24): Software Engineer – $95-$250K in Turkey, Netherlands, CA",
    linkHost: "ycombinator.com",
    posted: "22 days ago",
  },
  {
    rank: 19,
    headline:
      "LiteLLM (YC W23): Founding Reliability Engineer – $200K-$270K and 0.5-1.0% equity",
    linkHost: "ycombinator.com",
    posted: "23 days ago",
  },
  {
    rank: 20,
    headline:
      "Bild AI (YC W25) Is Hiring Interns to Make Housing Affordable",
    linkHost: "workatastartup.com",
    posted: "23 days ago",
  },
  {
    rank: 21,
    headline: "Hightouch (YC S19) Is Hiring",
    linkHost: "hightouch.com",
    posted: "23 days ago",
  },
  {
    rank: 22,
    headline:
      "Trellis AI (YC W24) is hiring deployment lead to accelerate medication access",
    linkHost: "ycombinator.com",
    posted: "24 days ago",
  },
  {
    rank: 23,
    headline: "Event Horizon Labs (YC W24) Is Hiring",
    linkHost: "ycombinator.com",
    posted: "24 days ago",
  },
  {
    rank: 24,
    headline: "Corgi Labs (YC W23) Is Hiring",
    linkHost: "ycombinator.com",
    posted: "25 days ago",
  },
  {
    rank: 25,
    headline:
      "Verge (YC S15) Is Hiring a Director of Computational Biology and AI Scientists/Eng",
    linkHost: "ashbyhq.com",
    posted: "25 days ago",
  },
  {
    rank: 26,
    headline: "SIM (YC X25) Is Hiring the Best Engineers in San Francisco",
    linkHost: "ycombinator.com",
    posted: "26 days ago",
  },
  {
    rank: 27,
    headline: "Hadrius (YC W23) Is Hiring Designers Who Code",
    linkHost: "ycombinator.com",
    posted: "26 days ago",
  },
  {
    rank: 28,
    headline:
      "Bitmovin (YC S15) Is Hiring Interns in AI for Summer 2026 in Austria",
    linkHost: "bitmovin.com",
    posted: "26 days ago",
  },
  {
    rank: 29,
    headline: "Padlet (YC W13) Is Hiring in San Francisco and Singapore",
    linkHost: "padlet.jobs",
    posted: "28 days ago",
  },
  {
    rank: 30,
    headline:
      "Legion Health (YC) Is Hiring Cracked SWEs for Autonomous Mental Health",
    linkHost: "ashbyhq.com",
    posted: "29 days ago",
  },
]
