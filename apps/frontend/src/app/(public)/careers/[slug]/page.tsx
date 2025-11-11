import { CareerDetailScreen } from '@/screens/career-detail';
import { MOCK_CAREERS } from '@/entities/career';
import { Metadata } from 'next';

interface CareerPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: CareerPageProps): Promise<Metadata> {
  const career = MOCK_CAREERS.find(
    (c) => c.slug === params.slug || c.id === params.slug
  );

  if (!career) {
    return {
      title: 'Карьер не найден',
    };
  }

  return {
    title: `${career.name} | SOLBER`,
    description: career.description,
  };
}

export async function generateStaticParams() {
  return MOCK_CAREERS.map((career) => ({
    slug: career.slug || career.id,
  }));
}

export default function CareerPage({ params }: CareerPageProps) {
  return <CareerDetailScreen slug={params.slug} />;
}

