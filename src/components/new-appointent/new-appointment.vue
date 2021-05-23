<template>
  <div>
    <div class="appointment-head">
      <h2>New Appointment</h2>
      <div class="head-right">
        <i
          class="i-Add-User cursor-pointer header-icon d-none d-sm-inline-block font-weight-bold"
          v-b-popover.hover.bottom="'Add Patient'"
        >
        </i>
        <div class="search-bar">
          <i class="search-icon text-muted i-Magnifi-Glass1"></i>
          <input
            type="text"
            placeholder="Search a Patient"
            v-model="getAppointmentData.headerSearch"
          />
        </div>
      </div>
    </div>
    <div class="appointment-body">
      <b-tabs>
        <b-tab title="Appoitment" active>
          <div class="mb-20">
            <div class="row">
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <b-form-datepicker
                        :date-format-options="{
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                        }"
                        id="new-appointment-date-selector"
                        v-model="getAppointmentData.selectedDate"
                        class="datepicker-input"
                      ></b-form-datepicker>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <b-form-timepicker
                        id="timepicker-placeholder"
                        v-model="getAppointmentData.selectedTime"
                        placeholder="Choose a time"
                        local="en"
                      ></b-form-timepicker>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <div class="input-icon"><i class="fa fa-arrows-h"></i></div>
                  <b-form-input
                    type="text"
                    required
                    placeholder="Duration"
                  ></b-form-input>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <b-form-input
                    type="text"
                    required
                    placeholder="Location"
                  ></b-form-input>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <b-form-input
                    type="text"
                    required
                    placeholder="Operatory"
                  ></b-form-input>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <b-form-input
                    type="text"
                    required
                    placeholder="Provider"
                  ></b-form-input>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <b-form-input
                    type="text"
                    required
                    placeholder="Secondary"
                  ></b-form-input>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <b-dropdown class="provider-dropdown mb-2 mr-5" text="Staff">
                    <b-dropdown-item @click="selectedProvider = ''"
                      >Staff</b-dropdown-item
                    >
                  </b-dropdown>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <b-dropdown class="provider-dropdown mb-2 mr-5" text="Status">
                    <b-dropdown-item @click="selectedProvider = ''"
                      >Status</b-dropdown-item
                    >
                  </b-dropdown>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <b-dropdown
                    class="color-option mb-2 mr-5"
                    text="Color Options"
                  >
                    <b-dropdown-item @click="selectedProvider = ''"
                      >Color Options</b-dropdown-item
                    >
                  </b-dropdown>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-20">
            <h5 class="font-weight-bold mb-3">Treatments</h5>
            <b-tabs content-class="mt-1">
              <b-tab title="Selected" active>
                <div class="treatments-wrap pt-4 mt-5">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <b-dropdown
                          class="provider-dropdown mb-2 mr-5"
                          text="Recurrence"
                        >
                          <b-dropdown-item @click="selectedProvider = ''"
                            >Recurrence</b-dropdown-item
                          >
                        </b-dropdown>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <b-form-input
                          type="text"
                          required
                          placeholder="Location"
                        ></b-form-input>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <h6 class="font-weight-bold mb-3">Teledentistry</h6>
                    <label class="checkbox checkbox-outline-primary">
                      <input type="checkbox" checked />
                      <span>Meet patient on HIPAA secured video</span>
                      <span class="checkmark"></span>
                    </label>
                    <div class="form-group">
                      <b-dropdown
                        class="provider-dropdown mb-2 mr-5"
                        text="Select HellpPatient Service"
                      >
                        <b-dropdown-item @click="selectedProvider = ''"
                          >Select HellpPatient Service</b-dropdown-item
                        >
                      </b-dropdown>
                    </div>
                    <h6 class="font-weight-bold mb-3">Save The Date</h6>
                    <label class="checkbox checkbox-outline-primary">
                      <input type="checkbox" checked />
                      <span>(HelloPatient - message sent via e-mail/text)</span>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              </b-tab>
              <b-tab title="Template"> </b-tab>
            </b-tabs>
          </div>
          <div class="row">
            <div class="col-md-12 text-right">
              <div class="appointment-btn">
                <b-button
                  class="btn-radius"
                  variant="outline-primary ripple ml-2"
                  >More Option</b-button
                >
                <b-button class="btn-radius" variant="primary ripple m-1"
                  >Save</b-button
                >
              </div>
            </div>
          </div>
        </b-tab>
        <b-tab title="Insurance">
          <div class="mb-20">
            <div></div>
          </div>
        </b-tab>
        <b-tab title="History">
          <div class="mb-20">
            <div></div>
          </div>
        </b-tab>
        <b-tab title="Patient Notes">
          <div class="mb-20">
            <div></div>
          </div>
        </b-tab>
        <b-tab title="Recall/Frequency">
          <div class="mb-20">
            <div></div>
          </div>
        </b-tab>
        <b-tab title="SOC">
          <div class="mb-20">
            <div></div>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "New-Appointment",
  data() {
    return {
      selectedProvider: "",
    };
  },
  computed: {
    ...mapGetters(["getAppointmentData"]),
  },
};
</script>