'use client';

import React from 'react';
import { useAtom } from 'jotai';
import { DataTableClient, Column } from '@/shared/ui';
import {
  Career,
  CAREER_STATUS_LABELS,
  MATERIAL_LABELS,
} from '@/entities/career';
import { selectedCareerIdsAtom, PRICE_PER_RECORD } from '@/shared/store';

interface CareersDataTableProps {
  careers: Career[];
  onCareerClick?: (career: Career) => void;
}

export function CareersDataTable({
  careers,
  onCareerClick,
}: CareersDataTableProps) {
  const [selectedIds, setSelectedIds] = useAtom(selectedCareerIdsAtom);

  const handleToggleSelection = (careerId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIds.includes(careerId)) {
      setSelectedIds(selectedIds.filter((id) => id !== careerId));
    } else {
      setSelectedIds([...selectedIds, careerId]);
    }
  };

  const columns: Column<Career>[] = [
    {
      key: 'id',
      label: '',
      sortable: false,
      width: '50px',
      align: 'center',
      render: (value: string) => (
        <div onClick={(e) => e.stopPropagation()}>
          <input
            type="checkbox"
            checked={selectedIds.includes(value)}
            onChange={(e) => handleToggleSelection(value, e as any)}
            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
          />
        </div>
      ),
    },
    {
      key: 'name',
      label: 'Название',
      sortable: true,
      width: '20%',
      render: (value: string, row: Career) => (
        <div>
          <div className="font-semibold text-gray-900">{value}</div>
          <div className="text-xs text-gray-500">{row.district}</div>
        </div>
      ),
    },
    {
      key: 'status',
      label: 'Статус',
      sortable: true,
      width: '12%',
      align: 'center',
      render: (value: string) => {
        const isActive = value === 'active';
        return (
          <span
            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
              isActive
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {CAREER_STATUS_LABELS[value as keyof typeof CAREER_STATUS_LABELS]}
          </span>
        );
      },
    },
    {
      key: 'region',
      label: 'Регион',
      sortable: true,
      width: '15%',
    },
    {
      key: 'materials',
      label: 'Материалы',
      sortable: false,
      width: '20%',
      render: (value: string) => (
        <div className="text-sm text-gray-600 truncate" title={value}>
          {value}
        </div>
      ),
    },
    {
      key: 'materialTypes',
      label: 'Типы',
      sortable: false,
      width: '15%',
      render: (value: string[]) => (
        <div className="flex flex-wrap gap-1">
          {value.slice(0, 2).map((type, idx) => (
            <span
              key={idx}
              className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded"
              title={MATERIAL_LABELS[type as keyof typeof MATERIAL_LABELS]}
            >
              {MATERIAL_LABELS[type as keyof typeof MATERIAL_LABELS]
                ?.split(' ')[0]
                .slice(0, 10)}
            </span>
          ))}
          {value.length > 2 && (
            <span className="text-xs text-gray-500 px-1 py-1">
              +{value.length - 2}
            </span>
          )}
        </div>
      ),
    },
    {
      key: 'contactPerson',
      label: 'Контакты',
      sortable: false,
      width: '18%',
      render: (value: string | undefined, row: Career) => {
        return (
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>После оплаты</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {PRICE_PER_RECORD.toLocaleString('ru-RU')} ₽
              </div>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <DataTableClient
      data={careers}
      columns={columns}
      keyExtractor={(career) => career.id}
      onRowClick={onCareerClick}
      emptyMessage="Карьеры не найдены"
      className="shadow-md"
    />
  );
}
