#!/bin/bash
# Supprime du dépôt les fichiers retirés de la nouvelle version (à lancer à la racine du projet).
# --ignore-unmatch : sans erreur si un fichier est déjà absent.
set -e
git rm -q --ignore-unmatch \
  "assets/icons/ansible.svg" \
  "assets/icons/arista-official.png" \
  "assets/icons/aws.svg" \
  "assets/icons/c-color.svg" \
  "assets/icons/chessdotcom.svg" \
  "assets/icons/cisco.svg" \
  "assets/icons/docker.svg" \
  "assets/icons/fortinet.svg" \
  "assets/icons/git.svg" \
  "assets/icons/githubactions.svg" \
  "assets/icons/gnubash.svg" \
  "assets/icons/jinja.svg" \
  "assets/icons/linkedin.svg" \
  "assets/icons/linux.svg" \
  "assets/icons/mysql.svg" \
  "assets/icons/numpy.svg" \
  "assets/icons/opencv.svg" \
  "assets/icons/openjdk.svg" \
  "assets/icons/packet-tracer.jpg" \
  "assets/icons/pandas.svg" \
  "assets/icons/python.svg" \
  "assets/icons/scikitlearn.svg" \
  "assets/icons/scrum.svg" \
  "assets/icons/streamlit.svg" \
  "assets/icons/tensorflow.svg" \
  "assets/icons/ubuntu.svg" \
  "assets/icons/wireshark.svg" \
  "assets/img/cert-sql.png" \
  "assets/img/ineos.png" \
  "assets/img/wan-topologie.png" \
  "assets/ui/arrow-up-right.svg" \
  "assets/ui/book-open.svg" \
  "assets/ui/car-front.svg" \
  "assets/ui/check.svg" \
  "assets/ui/chess-knight.svg" \
  "assets/ui/chevron-left.svg" \
  "assets/ui/chevron-right.svg" \
  "assets/ui/clapperboard.svg" \
  "assets/ui/copy.svg" \
  "assets/ui/download.svg" \
  "assets/ui/dumbbell.svg" \
  "assets/ui/graduation-cap.svg" \
  "assets/ui/mail.svg" \
  "assets/ui/map-pin.svg" \
  "assets/ui/menu.svg" \
  "assets/ui/moon.svg" \
  "assets/ui/send.svg" \
  "assets/ui/sun.svg" \
  "assets/ui/x.svg"
echo "Terminé : $(git status --short | grep -c "^D") fichiers marqués comme supprimés."
