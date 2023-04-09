const API_BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/';

export async function searchObjects(query) {
  const url = new URL(`${API_BASE_URL}search`);
  url.searchParams.append('q', query);
  try {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    return data.objectIDs;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function getObjectDetails(objectID) {
  const url = `${API_BASE_URL}objects/${objectID}`;
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  return data;
}

export async function getHighlights(query = 'sunflowers') {
  const url = new URL(`${API_BASE_URL}search`);
  url.searchParams.append('isHighlight', true);
  url.searchParams.append('q', query);
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  return data.objectIDs;
}

export async function getRandomObjectID() {
  const url = new URL(`${API_BASE_URL}objects`);
  url.searchParams.append('departmentIds', '11');
  url.searchParams.append('objectName', 'Painting');
  url.searchParams.append('hasImages', true);
  url.searchParams.append('metadataDate', '2022-04-09');
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  if (!data.total) {
    throw new Error('No objects found in response');
  }
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

export async function getSearched(text) {
  const url = new URL(`${API_BASE_URL}search`);
  url.searchParams.append('q', text);
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  return data.objectIDs;
}