
export async function fetchShopList() {
  try {
    const response = await fetch("http://localhost:5000/shopList/display");
    if (!response.ok) throw new Error("Chyba při načítání dat");
    const data = await response.json();
    console.log(data);
    return data.itemList;
  } catch (error) {
    console.error("Chyba:", error);
    throw error;
  }
}
export async function fetchItem()
{
  try {
    const response = await fetch("http://localhost:5000/item/display");
    if (!response.ok) throw new Error("Chyba při načítání dat");
    const data = await response.json();
    console.log(data);
    return data.itemList;
  } catch (error) {
    console.error("Chyba:", error);
    throw error;
  }
}


export async function uncheck(data) {
  try {
    await fetch("http://localhost:5000/item/uncheck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error unchecking item:", error);
    throw error;
  }
}

export async function createList(data) {
  try {
    const response = await fetch("http://localhost:5000/shopList/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const result = await response.json();
      return { success: false, message: result?.message || "Chyba při vytváření položky." };
    }

    return { success: true };
  } catch (error) {
    console.error("Error creating list:", error);
    return { success: false, message: "Nakupní seznam s tímto názvem již existuje." };
  }
}

export async function createItem(data) {
  try {
    const response = await fetch("http://localhost:5000/item/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const result = await response.json();
      return { success: false, message: result?.message || "Chyba při vytváření položky." };
    }

    return { success: true };
  } catch (error) {
    console.error("Error creating list:", error);
    return { success: false, message: "Položka s tímto názvem již existuje." };
  }
}


export async function addItem(data) {
  try {
    const response = await fetch("http://localhost:5000/item/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const result = await response.json();
      return { success: false, message: result?.message || "Chyba při vytváření položky." };
    }

    return { success: true };
  } catch (error) {
    console.error("Error creating list:", error);
    return { success: false, message: "Položka s tímto názvem už v seznamu je" };
  }
}

