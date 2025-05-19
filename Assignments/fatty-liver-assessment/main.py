import json
from datetime import datetime
import os

with open("data/fatty-liver-dataset.json", "r") as file:
    data = json.load(file)

log_entries = []
for patient in data:
    try:
        if patient.get("Weight", 0) >= 100:
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            patient_id = patient.get("Patient ID", "UnknownID")
            fbs = patient.get("Fasting Blood sugar", "NA")
            urea = patient.get("Urea", "NA")
            bmi = patient.get("BMI", "NA")
            log_entries.append(f"{timestamp} - {patient_id}: {fbs} : {urea} : Patient’s BMI is {bmi}")
    except Exception as e:
        continue


os.makedirs("output", exist_ok=True)


with open("output/patient_log.txt", "w") as log_file:
    for entry in log_entries:
        log_file.write(entry + "\n")

print("✅ Log created at 'output/patient_log.txt'")
