export interface Project {
  id: number;
  title: string;
  start_date: string;
  status: string;
  active: string;
  assignee: string;
  percent_complete: string;

  details: {
    requestor:
    {
      id: number;
      name: string;
      department: string;
    };
    summary: string;
    justification: string;
  };
  notes: object[];
}
