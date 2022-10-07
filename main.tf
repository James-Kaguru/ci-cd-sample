terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "3.5.0"
    }
  }
}

provider "google" {
  credentials = file("terraform-service-account-credentials.json")

  project = "gcp-practise-364610"
  region  = "europe-west1"
}

resource "google_storage_bucket" "gcp-practise-364610-my_storage_bucket" {
  name     = "gcp-practise-364610-storage_bucket_1"
  location = "europe-west1"

}
