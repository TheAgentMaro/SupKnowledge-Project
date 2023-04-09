const API_BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/';

export async function searchObjects(query) {
  const url = new URL(`${API_BASE_URL}search`);
  url.searchParams.append('q', query);
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  return data.objectIDs;
}

export async function getObjectDetails(objectID) {
  const url = `${API_BASE_URL}objects/${objectID}`;
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  return data;
}

export async function getHighlights() {
  const url = new URL(`${API_BASE_URL}search`);
  url.searchParams.append('isHighlight', true);
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  return data.objectIDs;
}

export async function getRandomObjectID() {
  const url = new URL(`${API_BASE_URL}objects`);
  url.searchParams.append('departmentIds', '11');
  url.searchParams.append('objectName', 'Painting');
  url.searchParams.append('hasImages', true);
  url.searchParams.append('metadataDate', '2021-06-30T20:00:00Z');
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  const randomNumber = Math.floor(Math.random() * data.total);
  const randomlySelectedRecord = data.objectIDs[randomNumber];
  return randomlySelectedRecord;
}

export async function getDepartmentList() {
  const url = new URL(`${API_BASE_URL}departments`);
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  return data.departments;
}