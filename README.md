# Project Management Form using JsonPowerDB
> A web-based Project Management System developed using HTML, Bootstrap, JavaScript, jQuery, and JsonPowerDB for managing project information.

The Project Management Form is a web-based application developed as a micro project using **JsonPowerDB**. It enables users to manage project information efficiently by performing CRUD operations (Create, Read, Update, and Reset). The application uses **Project ID** as the primary key to uniquely identify each project record.

When a user enters a Project ID, the application checks whether the record already exists in the JsonPowerDB database. If the Project ID is not found, the user can enter the project details and save them as a new record. If the Project ID already exists, the corresponding project details are displayed, allowing the user to update the existing information. The application also performs input validation to ensure that all required fields are completed before saving or updating data.

The project is developed using **HTML5**, **Bootstrap 5**, **JavaScript**, **jQuery**, and **JsonPowerDB**, demonstrating seamless integration between a modern web interface and a NoSQL database.

---

## Installation

### Windows

1. Download or clone the repository.

```sh
git clone https://github.com/roshnirawat909/ProjectManagementForm.git
```

2. Open the project in **Apache NetBeans IDE**.

3. Run the project.

4. Make sure you have an active internet connection because JsonPowerDB APIs are cloud-based.

---

## Usage example

### Save New Project

1. Enter Project ID.
2. If the Project ID does not exist:
   - Enter Project Name
   - Enter Assigned To
   - Enter Assignment Date
   - Enter Deadline
3. Click **Save**.

### Update Existing Project

1. Enter an existing Project ID.
2. Existing details will be displayed.
3. Modify the required fields.
4. Click **Update**.

### Reset Form

Click the **Reset** button to clear all fields and start a new operation.

---

## Development Setup

### Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- jQuery
- JsonPowerDB

### Database Details

| Item | Value |
|------|-------|
| Database Name | COLLEGE-DB |
| Relation Name | PROJECT-TABLE |
| Primary Key | Project ID |


## Benefits of using JsonPowerDB

- Simple and Easy to Use
- High Performance
- Lightweight Database
- REST API Based
- Schema-Free Database
- Serverless Architecture
- Fast CRUD Operations
- Easy JavaScript Integration
- No SQL Knowledge Required

---

## Features

- Save Project Details
- Retrieve Project using Project ID
- Update Existing Project
- Reset Form
- Input Validation
- Primary Key Validation
- Fast Database Access

---

## Release History

### Version 1.0 (July 2026)

- Initial Release
- Created Project Management Form
- Connected with JsonPowerDB
- Implemented Save Functionality
- Implemented Update Functionality
- Implemented Reset Functionality
- Added Input Validation
- Added Primary Key Search

---

## Project Structure

```
ProjectManagementForm/
│── index.html
│── index.js
│── README.md
```

---

## Scope of Functionalities

- Save Project Details
- Search Project by Project ID
- Update Existing Project
- Reset Form
- Validate User Input
- Perform CRUD Operations using JsonPowerDB
  
---

## Future Enhancements

- Delete Project Record
- Search All Projects
- User Authentication
- Dashboard
- Report Generation
- Project Status Tracking

---


## Meta

**Developer:** Roshni Rawat

B.Tech Computer Science & Information Technology

Sagar Institute of Research & Technology (SIRT), Bhopal

GitHub Repository

https://github.com/roshnirawat909/ProjectManagementForm



---

