# Project Management Form using JsonPowerDB
> A web-based Project Management System developed using HTML, Bootstrap, JavaScript, jQuery, and JsonPowerDB for managing project information.

This project is a micro project developed using **JsonPowerDB**. It allows users to perform CRUD operations on project records. The application checks whether a Project ID already exists in the database. If the Project ID exists, users can update the project details; otherwise, they can save a new project.

The application is developed using **HTML**, **Bootstrap**, **JavaScript**, **jQuery**, and **JsonPowerDB**.
---
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

The Project Management Form is a web-based application developed using HTML, Bootstrap, JavaScript, jQuery, and JsonPowerDB. It is designed to manage project information efficiently by allowing users to add new projects, search existing projects, update project details, and reset the form. The application uses **Project ID** as the primary key to uniquely identify each project record.

When a user enters a Project ID, the application first checks whether the record already exists in the JsonPowerDB database. If the Project ID is not found, the user can enter the project details and save them. If the Project ID already exists, the stored information is displayed, allowing the user to update the details. This project demonstrates the integration of JsonPowerDB with a front-end web application and showcases CRUD (Create, Read, Update, and Reset) operations with proper form validation.

## Installation

### Windows

1. Download or clone the repository.

```sh
git clone https://github.com/your-github-username/ProjectManagementForm.git
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

Database Name

```
COLLEGE-DB
```

Relation Name

```
PROJECT-TABLE
```

Primary Key

```
Project ID
```

---


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

[https://github.com/roshnirawat909/ProjectManagementForm](https://github.com/dbader/)



## Contributing

1. Fork the repository.
2. Create a new branch.

```sh
git checkout -b feature-name
```

3. Commit your changes.

```sh
git commit -m "Added new feature"
```

4. Push your branch.

```sh
git push origin feature-name
```

5. Create a Pull Request.

---

1. Fork it (<https://github.com/roshnirawat909/ProjectManagementForm/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
