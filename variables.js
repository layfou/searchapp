/*
Add to the end of the "Web App URL" ?path=Sheet1&action=read
Add to the end of the "Web App URL" ?path=Sheet1&action=write&Users=[name]
*/
const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1KNxwsIShGKJsc3pPSaUK7qyPM6m_ygclHh-Q2DuAQH4/edit?usp=sharing'

const read_execution = '?path=Sheet1&action=read'
const write_execution = `?path=Sheet1&action=write&Users=[name]`

const API_KEY = 'AKfycbxweMNmz6ifGrqhPqLlIhUwaJ1JOBMBCll4VAqZjfimrX7XHwhkMSVfya15TDrQ9O4y';
const EXEC_URL = `https://script.google.com/macros/s/${API_KEY}/exec`
const READ_API_URL = EXEC_URL + read_execution;

const fetchButton = document.querySelector('#fetch-button');
const searchBox = document.querySelector('.search-box');
const inputBox = document.querySelector('#input-box');
const logButton = document.querySelector('#log-button');

let resultBox = document.querySelector('.result-box');
let fetchedData = [];
let availableKeyword;