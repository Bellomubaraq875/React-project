'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TableSearch from '@/components/TableSearch';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import FormModal from '@/components/FormModal';
import { role, assignmentsData } from '@/lib/data';

type Assignment = {
    id: number;
    teacher: string;
    class: string;
    subject: string;
    dueDate: string;
};

const columns = [
    { header: 'Subject', accessor: 'subject' },
    { header: 'Class', accessor: 'class' },
    { header: 'Teacher', accessor: 'teacher', className: 'hidden md:table-cell' },
    { header: 'Due Date', accessor: 'dueDate', className: 'hidden md:table-cell' },
    { header: 'Actions', accessor: 'action' },
];

const AssignmentListPage = () => {
    const renderRow = (item: Assignment) => (
        <tr
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-blue-50"
        >
            <td className="flex items-center gap-4 py-2">{item.subject}</td>
            <td>{item.class}</td>
            <td className="hidden md:table-cell">{item.teacher}</td>
            <td className="hidden md:table-cell">{item.dueDate}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/assignments/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-200">
                            <Image src="/edit.png" alt="edit" width={16} height={16} />
                        </button>
                    </Link>

                    {role === 'admin' && (
                        <>
                            {/* <FormModal table="assignment" type="update" data={item} /> */}
                            <FormModal table="assignment" type="delete" id={item.id} />
                        </>
                    )}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-4">
            {/* Top Section */}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Assignments</h1>

                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                            <Image src="/filter.png" alt="filter" width={24} height={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                            <Image src="/sort.png" alt="sort" width={24} height={14} />
                        </button>
                        {role === 'admin' && 
                            <FormModal table="assignment" type="create" />
                        }
                    </div>
                </div>
            </div>

            {/* Table */}
            <Table columns={columns} renderRow={renderRow} data={assignmentsData} />

            {/* Pagination */}
            <Pagination />
        </div>
    );
};

export default AssignmentListPage;
