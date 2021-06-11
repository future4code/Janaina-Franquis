export const goToListTripPage = (history) => {
  history.push("/trips/list");
};

export const goToLoginPage = (history) => {
  history.push("/login");
};

export const goToHomePage = (history) => {
  history.push("/");
};

export const goToCreateTripPage = (history) => {
  history.push("/admin/trips/create");
};

export const goToAdminHome = (history) => {
  history.push("/admin/trips/create");
};

export const goToApplicationForm = (history) => {
  history.push("/trips/application");
};

export const goToAdminHomePage = (history) => {
  history.push("/admin/trips/create");
};

export const goToTripDetailsPage = (history) => {
  history.push("/admin/trips/:id")
}
