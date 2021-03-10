json.extract! project, :id, :name, :description, :project_start_date, :project_end_date, :download_project, :donate_project, :created_at, :updated_at
json.url project_url(project, format: :json)
