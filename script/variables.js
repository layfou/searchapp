// export {READ_EXEC, WRITE_EXEC, UPDATE_EXEC, API_KEY3, EXEC_URL, readAPI, updateAPI, fetchButton, searchBox, inputBox, resultBox, fetchedData, availableKeyword}

const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1KNxwsIShGKJsc3pPSaUK7qyPM6m_ygclHh-Q2DuAQH4/edit?usp=sharing'

const READ_EXEC = '?path=Sheet1&action=read';
const WRITE_EXEC = `?path=Sheet1&action=write&Users=[name]`;
const UPDATE_EXEC = `?path=Sheet1&action=update&product=`;

const API_KEY3 = 'AKfycbw_FkOYuLvyla25d4FAFASjq0ZBOdG2WWOVoo0N22_3Bscm2_Z-8sLT5TZQ8ylfGqFy';

const EXEC_URL = `https://script.google.com/macros/s/${API_KEY3}/exec`
const readAPI = EXEC_URL + READ_EXEC;
const updateAPI = EXEC_URL + UPDATE_EXEC;


const fetchButton = document.querySelector('#fetch-button');
const searchBox = document.querySelector('.search-box');
const inputBox = document.querySelector('#input-box');

let resultBox = document.querySelector('.result-box');
let fetchedData = [];
let availableKeyword;






