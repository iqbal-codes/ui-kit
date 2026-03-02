import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Blocks/Navigation/Pagination',
  component: Pagination,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    return (
      <Pagination
        page={page}
        totalPages={10}
        onPageChange={setPage}
      />
    )
  },
  args: {
    page: 1,
    totalPages: 10,
  },
}

export const WithFirstLast: Story = {
  render: () => {
    const [page, setPage] = useState(5)
    return (
      <Pagination
        page={page}
        totalPages={20}
        onPageChange={setPage}
        showFirstLast
      />
    )
  },
  args: {
    page: 5,
    totalPages: 20,
    showFirstLast: true,
  },
}

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = useState(15)
    return (
      <Pagination
        page={page}
        totalPages={100}
        onPageChange={setPage}
        showFirstLast
        siblingCount={2}
      />
    )
  },
  args: {
    page: 15,
    totalPages: 100,
    showFirstLast: true,
    siblingCount: 2,
  },
}

export const FewPages: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    return (
      <Pagination
        page={page}
        totalPages={3}
        onPageChange={setPage}
      />
    )
  },
  args: {
    page: 1,
    totalPages: 3,
  },
}
