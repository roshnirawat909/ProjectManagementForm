/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


// =======================================
// JSONPowerDB Configuration
// =======================================

var connToken = "90935086|-31949247919034412|90904035";

var dbName = "COLLEGE-DB";
var relName = "PROJECT-TABLE";

var baseUrl = "http://api.login2explore.com:5577";
var irl = "/api/irl";
var iml = "/api/iml";

// Stores record number for Update
var recNo = "";


// =======================================
// Page Load
// =======================================

$(document).ready(function () {

    resetForm();

});


// =======================================
// Reset Form
// =======================================

function resetForm() {

    $("#projectForm")[0].reset();

    $("#projectId").prop("disabled", false);

    disableForm();

    recNo = "";

    $("#projectId").focus();
}


// =======================================
// Disable Form
// =======================================

function disableForm() {

    $("#projectName").prop("disabled", true);
    $("#assignedTo").prop("disabled", true);
    $("#assignmentDate").prop("disabled", true);
    $("#deadline").prop("disabled", true);

    $("#saveBtn").prop("disabled", true);
    $("#updateBtn").prop("disabled", true);
    $("#resetBtn").prop("disabled", true);

}


// =======================================
// Enable Form
// =======================================

function enableForm() {

    $("#projectName").prop("disabled", false);
    $("#assignedTo").prop("disabled", false);
    $("#assignmentDate").prop("disabled", false);
    $("#deadline").prop("disabled", false);

}


// =======================================
// Save Mode
// =======================================

function enableSaveMode() {

    enableForm();

    $("#saveBtn").prop("disabled", false);
    $("#updateBtn").prop("disabled", true);
    $("#resetBtn").prop("disabled", false);

    $("#projectName").focus();

}


// =======================================
// Update Mode
// =======================================

function enableUpdateMode() {

    enableForm();

    $("#projectId").prop("disabled", true);

    $("#saveBtn").prop("disabled", true);
    $("#updateBtn").prop("disabled", false);
    $("#resetBtn").prop("disabled", false);

    $("#projectName").focus();

}

// =======================================
// Validate Form Data
// =======================================

function validateAndGetFormData() {

    var projectId = $("#projectId").val().trim();
    var projectName = $("#projectName").val().trim();
    var assignedTo = $("#assignedTo").val().trim();
    var assignmentDate = $("#assignmentDate").val().trim();
    var deadline = $("#deadline").val().trim();

    if (projectId === "") {
        alert("Project ID is Required");
        $("#projectId").focus();
        return "";
    }

    if (projectName === "") {
        alert("Project Name is Required");
        $("#projectName").focus();
        return "";
    }

    if (assignedTo === "") {
        alert("Assigned To is Required");
        $("#assignedTo").focus();
        return "";
    }

    if (assignmentDate === "") {
        alert("Assignment Date is Required");
        $("#assignmentDate").focus();
        return "";
    }

    if (deadline === "") {
        alert("Deadline is Required");
        $("#deadline").focus();
        return "";
    }

    var jsonObj = {
        projectId: projectId,
        projectName: projectName,
        assignedTo: assignedTo,
        assignmentDate: assignmentDate,
        deadline: deadline
    };

    return JSON.stringify(jsonObj);
}


// =======================================
// Get Project By Project ID
// =======================================


function getProject() {

    var projectId = $("#projectId").val().trim();

    if (projectId === "") {
        resetForm();
        return;
    }

    var getRequest = createGET_BY_KEYRequest(
            connToken,
            dbName,
            relName,
            JSON.stringify({
                projectId: projectId
            })
            );

    $.ajaxSetup({
        async: false
    });

    var resultObj = executeCommandAtGivenBaseUrl(
            getRequest,
            baseUrl,
            irl
            );

    $.ajaxSetup({
        async: true
    });

    console.log(resultObj);

    if (typeof resultObj === "string") {
        resultObj = JSON.parse(resultObj);
    }

    // Handle INVALID TOKEN or other errors
    if (resultObj.status !== 200) {

        if (resultObj.status === 400) {
            enableSaveMode();
            return;
        }

        alert(
                "Status: " + resultObj.status +
                "\nMessage: " + resultObj.message +
                "\nData: " + resultObj.data
                );
        
        return;
    }

    var dataObj = JSON.parse(resultObj.data);

    recNo = dataObj.rec_no;

    var record = dataObj.record;

    $("#projectName").val(record.projectName);
    $("#assignedTo").val(record.assignedTo);
    $("#assignmentDate").val(record.assignmentDate);
    $("#deadline").val(record.deadline);

    enableUpdateMode();
}


// =======================================
// Save Project
// =======================================

function saveProject() {

    // Validate Form
    var jsonStr = validateAndGetFormData();

    if (jsonStr === "") {
        return;
    }

    // Create PUT Request
    var putReqStr = createPUTRequest(
            connToken,
            jsonStr,
            dbName,
            relName
            );

    $.ajaxSetup({
        async: false
    });

    var resultObj = executeCommandAtGivenBaseUrl(
            putReqStr,
            baseUrl,
            iml
            );

    $.ajaxSetup({
        async: true
    });

    console.log(resultObj);

    if (resultObj.status === 200) {

        alert("Project Saved Successfully");

        resetForm();

    } else {

        alert("Unable to Save Project");

    }
}



// =======================================
// Update Project
// =======================================

function updateProject() {

    // Validate Form
    var jsonStr = validateAndGetFormData();

    if (jsonStr === "") {
        return;
    }

    // Create UPDATE Request
    var updateReqStr = createUPDATERecordRequest(
            connToken,
            jsonStr,
            dbName,
            relName,
            recNo
            );

    $.ajaxSetup({
        async: false
    });

    var resultObj = executeCommandAtGivenBaseUrl(
            updateReqStr,
            baseUrl,
            iml
            );

    $.ajaxSetup({
        async: true
    });

    console.log(resultObj);

    if (resultObj.status === 200) {

        alert("Project Updated Successfully");

        resetForm();

    } else {

        alert("Unable to Update Project");

    }
}

