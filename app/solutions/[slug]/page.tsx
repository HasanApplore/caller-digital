import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import solutionsData from '@/data/solutions.json';
import SolutionPage from '@/components/SolutionPage';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return solutionsData.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const solution = solutionsData.find(s => s.slug === params.slug);
  
  if (!solution) {
    return {
      title: 'Solution Not Found',
      description: 'The requested solution page could not be found.',
    };
  }

  return {
    title: solution.seo.title,
    description: solution.seo.description,
    keywords: solution.seo.keywords,
    openGraph: {
      title: solution.seo.title,
      description: solution.seo.description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: solution.seo.title,
      description: solution.seo.description,
    },
  };
}

export default function SolutionPageWrapper({ params }: PageProps) {
  const solution = solutionsData.find(s => s.slug === params.slug);
  
  if (!solution) {
    notFound();
  }

  return <SolutionPage solution={solution} />;
} 