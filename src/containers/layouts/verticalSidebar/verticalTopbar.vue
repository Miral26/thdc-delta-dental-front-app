<template>
  <div class="mb-30">
    <header class="main-header vertical-header d-flex">
      <div class="menu-toggle vertical-toggle" @click="mobileSidebar">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="header-toggle">
        <div class="search-bar">
          <i class="search-icon text-muted i-Magnifi-Glass1"></i>
          <input
            type="text"
            placeholder="Search a Patient"
            v-model="headerSearch"
          />
        </div>

        <!-- Header Icons -->
        <div class="d-flex">
          <i
            class="i-File-Clipboard-File--Text cursor-pointer header-icon d-none d-sm-inline-block font-weight-bold"
            @click="openAppointmentModal"
            v-b-popover.hover.bottom="'Add Appointment'"
          >
          </i>
          <i
            class="i-Add-User cursor-pointer header-icon d-none d-sm-inline-block font-weight-bold"
            v-b-popover.hover.bottom="'Add Patient'"
          >
          </i>
          <!-- <i
            class="i-Magnifi-Glass- cursor-pointer header-icon d-none d-sm-inline-block font-weight-bold"
            v-b-popover.hover.bottom="'Advanced Patient Search'"
          >
          </i> -->
        </div>
      </div>

      <div class="header-part-right">
        <div class="dropdown location">
          <b-dropdown
            id="dropdown"
            text="Dropdown Button"
            toggle-class="text-decoration-none"
            no-caret
            variant="button"
          >
            <template slot="button-content">
              <i
                class="i-Home1 header-icon"
                role="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></i>
              <span
                class="text-decoration-none text-14 cursor-pointer"
                style="text-decoration: none"
              >
                {{ cloudBase.clinic ? cloudBase.clinic : "Cloud Based..." }}
                <i
                  class="i-Arrow-Down text-20 cursor-pointer header-icon d-sm-inline-block"
                  v-b-popover.hover.bottom="'Client - Location'"
                >
                </i>
              </span>
            </template>
            <div class="menu-icon-grid p-3 border-dark">
              <div class="form-group w-100">
                <b-form>
                  <div class="form-group">
                    <b-form-select
                      id="input-3"
                      v-model="cloudBase.clinic"
                      :options="cloudBase.clinics"
                      required
                    >
                    </b-form-select>
                  </div>
                </b-form>
              </div>
            </div>
          </b-dropdown>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import * as moment from "moment";
import { mixin as clickaway } from "vue-clickaway";
import Util from "@/utils";

export default {
  mixins: [clickaway],
  computed: {
    ...mapGetters([
      "getVerticalCompact",
      "getVerticalSidebar",
      "getSideBarToggleProperties",
    ]),
  },
  data() {
    return {
      isMegaMenuOpen: false,
      megaMenuOptions: [
        {
          id: 1,
          title: "Schedule Template",
          icon: "i-Shop-4",
          route: "/app/schedule-template",
        },
        {
          id: 2,
          title: "Users",
          icon: "i-Checked-User",
          route: "/app/users",
        },
        {
          id: 3,
          title: "Locations",
          icon: "i-Drop",
          route: "/app/locations",
        },
        {
          id: 4,
          title: "Location Hours",
          icon: "i-File-Clipboard-File--Text",
          route: "/app/location-hours",
        },
        {
          id: 5,
          title: "Operatories",
          icon: "i-Shop-4",
          route: "/app/operatories",
        },
        {
          id: 6,
          title: "Delta Dental",
          icon: "i-Ambulance",
          route: "/app/delta-dental",
        },
      ],
      dateSelected: new Date(),
      headerSearch: "",
      appointmentData: {
        headerSearch: "",
        selectedTime: moment().format("HH:MM:ss"),
        selectedDate: new Date(2018, 7, 1),
      },
      options2: [
        { value: "1", text: "aa" + " - " + "1" },
        { value: "2", text: "ab" + " - " + "2" },
        { value: "3", text: "bc" + " - " + "3" },
        { value: "4", text: "cd" + " - " + "4" },
        { value: "5", text: "de" + " - " + "5" },
      ],

      cloudBase: {
        clinic: "Cloud Based...",
        clinics: ["Cloud Based...", "Clinic1", "Clinic2", "Clinic3"],
        location: null,
        locations: [
          { text: "Select Location", value: null },
          "USD",
          "Canada",
          "Africa",
          "Australia",
        ],
      },
    };
  },
  methods: {
    ...mapActions([
      "signOut",
      "switchSidebar",
      "sidebarCompact",
      "removeSidebarCompact",
      "mobileSidebar",
      "setAppointmentData",
    ]),
    openAppointmentModal() {
      this.setAppointmentData({
        headerSearch: "",
        selectedTime: moment().format("HH:MM:ss"),
        selectedDate: new Date(),
      });
      this.$bvModal.show("new-appointment");
    },
    handleFullScreen() {
      Util.toggleFullScreen();
    },
    closeMegaMenu() {
      this.isMegaMenuOpen = false;
      // console.log(this.isMouseOnMegaMenu);
      // if (!this.isMouseOnMegaMenu) {
      //   this.isMegaMenuOpen = !this.isMegaMenuOpen;
      // }
    },
    toggleMegaMenu() {
      this.isMegaMenuOpen = !this.isMegaMenuOpen;
    },
  },
  watch: {
    // dateSelected(val){
    // }
  },
};
</script>