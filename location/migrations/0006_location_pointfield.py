# Generated by Django 4.0.3 on 2022-03-22 16:09

import django.contrib.gis.db.models.fields
import django.contrib.gis.geos.point
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('location', '0005_alter_location_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='pointfield',
            field=django.contrib.gis.db.models.fields.PointField(default=django.contrib.gis.geos.point.Point(0.0, 0.0), geography=True, srid=4326),
        ),
    ]