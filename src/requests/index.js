const baseURL = "https://json-api.uz/api/project/fn28";

//Get all
export async function getAll(route = "/invoices") {
  const req = await fetch(baseURL + route);
  if (req.status === 200) {
    const { data } = await req.json();
    return data;
  } else {
    throw new Error("Something went wrong!");
  }
}

// Get details
export async function getDitails(route = "/invoices", id = "/1") {
  const req = await fetch(baseURL + route + id);
  if (req.status === 200) {
    const { data } = await req.json();
    return data;
  } else {
    throw new Error("Something went wrong!");
  }
}

// Create data
export async function createData(route = "/invoices", addedData) {
  const req = await fetch(baseURL + route, {
    method: "POST",
    headers: {
      "constent-Type": "aplication/json",
    },
    body: JSON.stringify(addedData),
  });

  if (req.status === 200) {
    const data = await req.json();
  } else {
    throw new Error("Something went wrong!");
  }
}

// Delete data
export async function deleteData(route = "/invoices", id = "/1") {
  const req = await fetch(baseURL + route, {
    method: "DELETE",
  });

  if (req.status === 200) {
    return id;
  } else {
    throw new Error("Something went wrong!");
  }
}

// Edit data
export async function editData(route = "/invoices", id = "/1", editData) {
  const req = await fetch(baseURL + route + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editData),
  });

  if (req.status === 200) {
    const data = await req.json();
    return data;
  } else {
    throw new Error("Something went wrong!");
  }
}
